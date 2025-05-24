# [382. Linked List Random Node (Medium)](https://leetcode.com/problems/linked-list-random-node/)

<p>Given a singly linked list, return a random node's value from the linked list. Each node must have the <strong>same probability</strong> of being chosen.</p>

<p>Implement the <code>Solution</code> class:</p>

<ul>
	<li><code>Solution(ListNode head)</code> Initializes the object with the integer array nums.</li>
	<li><code>int getRandom()</code> Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be choosen.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg" style="width: 302px; height: 62px;">
<pre><strong>Input</strong>
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
<strong>Output</strong>
[null, 1, 3, 2, 2, 3]

<strong>Explanation</strong>
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.

</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the linked list will be in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
	<li>At most <code>10<sup>4</sup></code> calls will be made to <code>getRandom</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>What if the linked list is extremely large and its length is unknown to you?</li>
	<li>Could you solve this efficiently without using extra space?</li>
</ul>

**Companies**:  
[Google](https://leetcode.com/company/google), [Facebook](https://leetcode.com/company/facebook), [Microsoft](https://leetcode.com/company/microsoft), [Amazon](https://leetcode.com/company/amazon)

**Related Topics**:  
[Linked List](https://leetcode.com/tag/linked-list/), [Math](https://leetcode.com/tag/math/), [Reservoir Sampling](https://leetcode.com/tag/reservoir-sampling/), [Randomized](https://leetcode.com/tag/randomized/)

**Similar Questions**:

- [Random Pick Index (Medium)](https://leetcode.com/problems/random-pick-index/)

---

No problem! Let's break down the **Reservoir Sampling** approach step by step, in plain English, so you understand how the solution to **LeetCode 382. Linked List Random Node** works.

---

## 🔧 Problem:

You're given a **singly linked list**, and you don’t know its length.

You need to return a random node’s value such that **each node has the same chance (1/n)** of being chosen, where `n` is the total number of nodes.

And you should do this **without storing all the nodes in memory** (so: O(1) space).

---

## 🧠 What is Reservoir Sampling?

It’s an algorithm for picking one or more random items from a stream of unknown length. For this problem, we just want to pick **1 item**.

---

## 🚶 Walkthrough with Example:

Let’s say your linked list is:

```
[10] -> [20] -> [30] -> null
```

You traverse the list **one node at a time**, and for each node you say:

> “Do I want to pick this node?”

But how do you decide **fairly**?

Here’s how:

### Step-by-step:

- **Step 1:**

  - First node is `10`, and it's the first thing you see.
  - You have no choice but to take it (1st element is always chosen).
  - So you pick `10` as your current `result`.

- **Step 2:**

  - Now you see `20`, the second node.
  - You want to keep either `10` or replace it with `20`.
  - Each should have 50% chance.
  - So you generate a random number in range `[0, 1]`:

    ```js
    if (Math.floor(Math.random() * 2) === 0)
    ```

    If random number is 0 → choose `20`. If it’s 1 → keep `10`.

- **Step 3:**

  - Now you see `30`, the third node.
  - You want each of `10`, `20`, and `30` to have a 1/3 chance.
  - So you generate a number in range `[0, 2]`:

    ```js
    if (Math.floor(Math.random() * 3) === 0)
    ```

    If it's 0 → choose `30`. Otherwise, keep what you already had.

And that’s it!

---

## 💡 The Code Again with Comments

```javascript
class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let result = null;
    let current = this.head;
    let i = 1;

    while (current !== null) {
      // Pick current node's value with probability 1/i
      if (Math.floor(Math.random() * i) === 0) {
        result = current.val;
      }
      current = current.next;
      i++;
    }

    return result;
  }
}
```

---

## 📊 Why It Works:

Every node has exactly a **1/n** chance of being the final result. That’s because:

- First node has 100% chance initially, but 50% chance of staying after 2nd node, and 2/3 chance of staying after 3rd = 1/3 total.
- Same goes for all others — math balances out!

---

## ✅ TL;DR

- You loop through the list once.
- You update the result with `current.val` with a **decreasing probability** (`1 / current node index`).
- In the end, every node had equal chance of being picked.
- You don’t use extra space — only one `result` variable.

---

Would you like:

- A visual diagram?
- Or a version that uses an array instead of streaming traversal?
