# [142. Linked List Cycle II (Medium)](https://leetcode.com/problems/linked-list-cycle-ii/)

<p>Given the <code>head</code> of a linked list, return <em>the node where the cycle begins. If there is no cycle, return </em><code>null</code>.</p>

<p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail's <code>next</code> pointer is connected to (<strong>0-indexed</strong>). It is <code>-1</code> if there is no cycle. <strong>Note that</strong> <code>pos</code> <strong>is not passed as a parameter</strong>.</p>

<p><strong>Do not modify</strong> the linked list.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="height: 145px; width: 450px;">
<pre><strong>Input:</strong> head = [3,2,0,-4], pos = 1
<strong>Output:</strong> tail connects to node index 1
<strong>Explanation:</strong> There is a cycle in the linked list, where tail connects to the second node.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" style="height: 105px; width: 201px;">
<pre><strong>Input:</strong> head = [1,2], pos = 0
<strong>Output:</strong> tail connects to node index 0
<strong>Explanation:</strong> There is a cycle in the linked list, where tail connects to the first node.
</pre>

<p><strong>Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" style="height: 65px; width: 65px;">
<pre><strong>Input:</strong> head = [1], pos = -1
<strong>Output:</strong> no cycle
<strong>Explanation:</strong> There is no cycle in the linked list.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
	<li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p>

**Companies**:  
[Microsoft](https://leetcode.com/company/microsoft), [Amazon](https://leetcode.com/company/amazon), [Goldman Sachs](https://leetcode.com/company/goldman-sachs), [Oracle](https://leetcode.com/company/oracle)

**Related Topics**:  
[Hash Table](https://leetcode.com/tag/hash-table/), [Linked List](https://leetcode.com/tag/linked-list/), [Two Pointers](https://leetcode.com/tag/two-pointers/)

**Similar Questions**:

- [Linked List Cycle (Easy)](https://leetcode.com/problems/linked-list-cycle/)
- [Find the Duplicate Number (Medium)](https://leetcode.com/problems/find-the-duplicate-number/)

---

Great question! Understanding **why Floyd’s Cycle Detection Algorithm** can find the **start of a cycle** (not just detect it) is key to mastering linked list problems. Let's break it down step by step.

---

### ✅ Step 1: Detect the Cycle

Two pointers:

- `slow` moves 1 step at a time
- `fast` moves 2 steps at a time

If there's a cycle, they **must meet** inside it — this is guaranteed by the **Pigeonhole Principle**.

---

### ✅ Step 2: Find the Cycle Start

After detecting the cycle (i.e., `slow === fast`), we want to find the **entry point** of the cycle.

Let’s define:

- `L`: distance from `head` to cycle start
- `C`: length of the cycle
- `X`: distance from cycle start to the meeting point inside the cycle

So:

- `slow` has moved `L + X` steps
- `fast` has moved `L + X + n*C` steps (some full laps around the cycle), and since `fast` moves 2x speed:
  `2(L + X) = L + X + n*C`
  Solving:
  `L + X = n*C`
  → `L = n*C - X`

This means:

> If you move `L` steps from **head**, and move `n*C - X` steps from **meeting point**, you'll both reach the **cycle start**!

So when you reset one pointer to `head`, and move both one step at a time, **they'll meet at the start of the cycle**.

---

### 📌 Visualization

```
head →→→→→→→→↘
               A → B → C → D
                     ↑       ↓
                     G ← F ← E
```

Let’s say:

- `L = 8` (distance from head to `A`)
- `X = 3` (from `A` to `D`)
- `C = 6` (cycle length: A → B → C → D → E → F → A)

Then:

- `L + X = 11`, which is a multiple of `C`
- So, the math holds: when one pointer is at `head` and the other at `D`, moving both 1 step at a time will make them meet at `A`

---

### 🧠 Summary

- The algorithm exploits the mathematical relationship between:

  - Distance to cycle start (`L`)
  - Distance into the cycle where pointers meet (`X`)
  - Length of the cycle (`C`)

- It guarantees the two pointers will meet at the **start of the cycle** after reset.

Let me know if you'd like a diagram or animated trace!
