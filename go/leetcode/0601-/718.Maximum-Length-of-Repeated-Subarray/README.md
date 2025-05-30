# [718. Maximum Length of Repeated Subarray (Medium)](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)

<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>the maximum length of a subarray that appears in <strong>both</strong> arrays</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The repeated subarray with maximum length is [3,2,1].
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
<strong>Output:</strong> 5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 100</code></li>
</ul>

**Companies**:  
[Karat](https://leetcode.com/company/karat), [Indeed](https://leetcode.com/company/indeed), [Apple](https://leetcode.com/company/apple), [Amazon](https://leetcode.com/company/amazon), [Intuit](https://leetcode.com/company/intuit), [Wayfair](https://leetcode.com/company/wayfair)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Sliding Window](https://leetcode.com/tag/sliding-window/), [Rolling Hash](https://leetcode.com/tag/rolling-hash/), [Hash Function](https://leetcode.com/tag/hash-function/)

**Similar Questions**:

- [Minimum Size Subarray Sum (Medium)](https://leetcode.com/problems/minimum-size-subarray-sum/)

---

That’s a **very common misconception**, so let’s clear it up completely:

---

## ✅ What "Top-Down" and "Bottom-Up" **Really Mean** in Dynamic Programming

| Style         | Uses Recursion? | Builds DP Table? | Order of Traversal          | Memoization?  |
| ------------- | --------------- | ---------------- | --------------------------- | ------------- |
| **Top-Down**  | ✅ Yes          | ❌ No            | On demand (recursive calls) | ✅ Usually    |
| **Bottom-Up** | ❌ No           | ✅ Yes           | Iterative (any direction)   | ❌ Not needed |

---

## ❗ Misconception: “Top-Down means iterating from top to bottom”

It **does not refer to loop direction** (e.g. from `0` to `n` or from `n` to `0`). It refers to **how the subproblems are solved**.

---

## 🔍 Definitions:

### 🧠 Top-Down DP:

- You **start with the original problem** and **recursively break it down into subproblems**.
- You use **memoization** (cache results) to avoid recomputation.
- It’s also called **recursive + memoization**.

```js
function dp(i, j) {
  if (i >= len1 || j >= len2) return 0;
  if (memo[i][j] !== -1) return memo[i][j];
  ...
}
```

> This is top-down because you go from the **full problem** to the **base cases** recursively.

---

### 🧱 Bottom-Up DP:

- You **build up the solution from the base cases**, usually using loops.
- You fill in the DP table from the **smallest subproblems** up to the final answer.

```js
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    ...
  }
}
```

> This is bottom-up because you solve all the **small subproblems first**, then build toward the final result.

---

## ✅ So In Your Case:

Your code:

```js
for (let i = 1; i <= nums1.length; i++) {
  for (let j = 1; j <= nums2.length; j++) {
    if (nums1[i - 1] === nums2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    }
  }
}
```

- Is a **bottom-up DP** solution.
- **Direction of the loop** (start to end or end to start) doesn’t determine that.
- What matters is: **you’re filling a DP table without recursion**.

---

## 🧠 Summary

- ✅ **Top-Down** = Recursive + memoized
- ✅ **Bottom-Up** = Iterative + table-based
- ❌ The loop direction (`i++` or `i--`) has nothing to do with top-down vs bottom-up

---

Would you like to see a **top-down version** of your `findLength` function using recursion and memoization?

---

Great question — and the answer is **"Not necessarily."** Let’s unpack it clearly.

---

## 🌲 Is Binary Tree Traversal "Top-Down DP"?

### ✅ **Sometimes**, but not always.

It depends on **how** you're solving the problem.

---

## 📌 First, What Is "Top-Down DP"?

* A dynamic programming strategy that uses:

  * **Recursion**
  * **Memoization** (caching subproblem results)

---

## ✅ Tree Traversals Can Be:

### 1. **Plain traversal (not DP)**:

When you're just walking the tree to do something like print values, sum all nodes, find a max, etc., you're **not using DP**.

```js
function preorder(node) {
  if (!node) return;
  console.log(node.val);
  preorder(node.left);
  preorder(node.right);
}
```

This is just a traversal — no dynamic programming involved.

---

### 2. **Top-Down Tree DP**:

You're using recursion, passing down state, and making decisions at each node **based on information from the parent**.

Example: Leetcode 124 – **Binary Tree Maximum Path Sum**

```js
function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, left + right + node.val);
    return Math.max(left, right) + node.val;
  }

  dfs(root);
  return maxSum;
}
```

Here:

* We're solving subproblems for each subtree.
* We're caching the *best* values along the way.
* This is recursive and builds toward a full solution.

So yes, this is **top-down tree DP**, even though we don't explicitly use a `memo` table — the recursion implicitly handles subproblem results.

---

### 3. **Bottom-Up Tree DP**:

If your solution builds results from children up to the parent and doesn't rely on passed-down state, that's **bottom-up**.

For example: Computing the **height of a tree**:

```js
function height(node) {
  if (!node) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}
```

This is bottom-up — each node **waits** for the height of its children before computing its own.

---

## ✅ So What Matters Is:

* Are you **solving overlapping subproblems**?
* Are you **using recursion to break the problem down**?
* Are you **caching intermediate results** (explicitly or via the call stack)?

If yes → It's DP (top-down or bottom-up).
If no → It’s just recursion or traversal.

---

## 🧠 Summary

| Tree Technique              | DP?     | Top-Down? | Bottom-Up? |
| --------------------------- | ------- | --------- | ---------- |
| Simple traversal            | ❌ No    | ❌         | ❌          |
| DFS with memoization        | ✅ Yes   | ✅ Often   | ❌          |
| DFS computing from children | ✅ Maybe | ❌         | ✅ Often    |

---

If you'd like, I can show a **side-by-side example** of top-down vs bottom-up DP on the same tree problem. Would that help clarify even more?
