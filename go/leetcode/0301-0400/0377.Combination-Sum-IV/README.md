# [377. Combination Sum IV (Medium)](https://leetcode.com/problems/combination-sum-iv)

<p>Given an array of <strong>distinct</strong> integers <code>nums</code> and a target integer <code>target</code>, return <em>the number of possible combinations that add up to</em>&nbsp;<code>target</code>.</p>
<p>The test cases are generated so that the answer can fit in a <strong>32-bit</strong> integer.</p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3], target = 4
<strong>Output:</strong> 7
<strong>Explanation:</strong>
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [9], target = 3
<strong>Output:</strong> 0
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>1 &lt;= nums.length &lt;= 200</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li>All the elements of <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>1 &lt;= target &lt;= 1000</code></li>
</ul>
<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?</p>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Google](https://leetcode.com/company/google), [Facebook](https://leetcode.com/company/facebook)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

**Similar Questions**:

- [Combination Sum (Medium)](https://leetcode.com/problems/combination-sum/)
- [Ways to Express an Integer as Sum of Powers (Medium)](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/)

---

Great question! You're comparing two **loop orderings** in the solution to **LeetCode 377. Combination Sum IV**, and this distinction is very important.

---

## ✅ Problem Recap:

- Given an array of **distinct positive integers `nums`** and an **integer `target`**, return the **number of possible combinations** that add up to `target`.
- **Order matters** — `[1, 2]` and `[2, 1]` are considered **different** combinations.

---

## 🔁 Loop Order: What's the difference?

Let's compare the two versions:

---

### ✅ Version A: (Correct for this problem)

```js
for (let i = 1; i <= target; i++) {
  for (const num of nums) {
    if (i - num >= 0) {
      dp[i] += dp[i - num];
    }
  }
}
```

This loop says:

> For each **target value `i` from 1 to `target`**, try all `num` to see if it can help build up to `i`.

- This means we are **building solutions by target sum size** (`i`) in **increasing order**.
- At `dp[i]`, we’re saying:

  > If we want to form sum `i`, and we can use `num`, then we can add the number of ways to form `i - num` to `dp[i]`.

**Order matters here**, because each different sequence of choices gives a different result (e.g., \[1,2] vs \[2,1]).

### ✅ Result:

This loop correctly counts **all permutations** (i.e., different sequences) of combinations.

---

### ❌ Version B: (Incorrect for this problem)

```js
for (const num of nums) {
  for (let i = 1; i <= target; i++) {
    if (i - num >= 0) {
      dp[i] += dp[i - num];
    }
  }
}
```

This loop says:

> For each **num**, try to use it to build up all sums from `1` to `target`.

This is the **correct loop** if the problem asks for:

- **Combination counts without caring about order** (like **LeetCode 518. Coin Change 2**).
- Or if it’s a **subset sum** or **knapsack variant** where **order doesn’t matter**.

But here — **order matters** — so this loop will **miss some permutations** or **count them incorrectly**.

---

## ✅ Key Takeaway:

| Loop Order                    | Use When                  | Order Matters? | Correct for LC 377? |
| ----------------------------- | ------------------------- | -------------- | ------------------- |
| `for (i = 1 to target) outer` | You want **permutations** | ✅ Yes         | ✅ Yes              |
| `for (num of nums) outer`     | You want **combinations** | ❌ No          | ❌ No               |

---

### 🧠 Analogy:

Think of `dp[i]` as:

> "How many _ordered sequences_ of numbers from `nums` add up to `i`?"

Then the correct approach must:

- Build up `dp[i]` by looking at **all smaller values** `dp[i - num]`
- In **the order of increasing target sum**, not by iterating over `nums` first

---

## ✅ Final Answer:

The difference lies in **whether order matters**:

- `for (let i = 1; ...)` outer loop ⇒ **order-sensitive**, used in **LeetCode 377**
- `for (const num of nums)` outer loop ⇒ **order-insensitive**, used in **LeetCode 518**

Let me know if you want to see a side-by-side example showing the wrong counts for Version B!
