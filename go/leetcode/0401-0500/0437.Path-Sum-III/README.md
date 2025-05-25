# [437. Path Sum III (Medium)](https://leetcode.com/problems/path-sum-iii/)

<p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <em>the number of paths where the sum of the values&nbsp;along the path equals</em>&nbsp;<code>targetSum</code>.</p>

<p>The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" style="width: 450px; height: 386px;">
<pre><strong>Input:</strong> root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
<strong>Output:</strong> 3
<strong>Explanation:</strong> The paths that sum to 8 are shown.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 1000]</code>.</li>
	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
	<li><code>-1000 &lt;= targetSum &lt;= 1000</code></li>
</ul>

**Companies**:  
[Facebook](https://leetcode.com/company/facebook), [Amazon](https://leetcode.com/company/amazon), [Microsoft](https://leetcode.com/company/microsoft), [Bloomberg](https://leetcode.com/company/bloomberg), [Oracle](https://leetcode.com/company/oracle), [Adobe](https://leetcode.com/company/adobe)

**Related Topics**:  
[Tree](https://leetcode.com/tag/tree/), [Depth-First Search](https://leetcode.com/tag/depth-first-search/), [Binary Tree](https://leetcode.com/tag/binary-tree/)

**Similar Questions**:

- [Path Sum (Easy)](https://leetcode.com/problems/path-sum/)
- [Path Sum II (Medium)](https://leetcode.com/problems/path-sum-ii/)
- [Path Sum IV (Medium)](https://leetcode.com/problems/path-sum-iv/)
- [Longest Univalue Path (Medium)](https://leetcode.com/problems/longest-univalue-path/)

---

Absolutely! Let's break down the **prefix sum + DFS solution** for **LeetCode 437: Path Sum III** in more detail.

---

## 🔄 Problem Restated

We’re asked to find how many **paths** in a binary tree **sum to a given target**.

- The path **must go downward** (from parent to child),
- But it **can start and end anywhere** in the tree,
- So we can't just check paths from the root or to the leaves.

---

## 🧠 Core Insight: Use **prefix sums** like in array problems

### 🧩 What is a prefix sum?

A **prefix sum** at a node is the **sum of values from the root to this node**.

For example, in a tree:

```
    10
   /
  5
```

- prefix sum at 10 = 10
- prefix sum at 5 = 10 + 5 = 15

---

## 🎯 Goal

We want to find how many paths (ending at any node) have a **sum equal to targetSum**.

A path's sum from **some ancestor** to **current node** is:

```js
currentPrefixSum - oldPrefixSum = targetSum
```

Which means:

```js
oldPrefixSum = currentPrefixSum - targetSum;
```

If we’ve **seen this old prefix sum before**, it means there exists a **path ending at current node** whose sum is `targetSum`.

---

## ✅ Step-by-step Process

### 📦 Maintain a `Map<prefixSum, frequency>`:

- Start with: `{ 0: 1 }` (to handle exact matches from root)
- Do a DFS traversal:

  1. Add `node.val` to the running sum
  2. Check if `currentSum - targetSum` exists in the map

     - If so, we've found a path(s) ending at this node that sums to `targetSum`

  3. Update the map with `currentSum`
  4. Recurse into left and right children
  5. Backtrack: remove the current sum from map to not affect sibling branches

---

## 🔍 Visual Example

Let's walk through an example tree:

```
      10
     /  \
    5   -3
   / \    \
  3   2    11
 / \   \
3  -2   1
```

Target sum = `8`

### ✅ Path 1: 5 → 3

- prefix sum at 5 = 10 + 5 = 15
- prefix sum at 3 = 15 + 3 = 18
- 18 - 8 = 10 → we've seen prefix sum 10 at root, so path 5 → 3 is valid

### ✅ Path 2: 5 → 2 → 1

- 10 → 5 → 2 → 1 = 18
- 18 - 8 = 10 → again, match at prefix sum 10

### ✅ Path 3: -3 → 11

- 10 → -3 → 11 = 18
- 18 - 8 = 10 → prefix sum 10 seen at root → path -3 → 11 is valid

---

## 🧼 Why backtrack (subtract from the map)?

We remove the prefix sum after the recursive call so it **doesn't affect other branches**.

For example:

- When we finish processing the left child of a node, we want the map to reflect the **prefix sums in the current path only**.
- Without backtracking, prefix sums from one path would “leak” into sibling branches and give **wrong results**.

---

## ✅ Code Again (For Reference)

```js
var pathSum = function (root, targetSum) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, 1); // To handle root-to-current equal to target

  function dfs(node, currentSum) {
    if (!node) return 0;

    currentSum += node.val;

    const count = prefixSumMap.get(currentSum - targetSum) || 0;

    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

    const totalPaths = count + dfs(node.left, currentSum) + dfs(node.right, currentSum);

    // Backtrack after visiting both children
    prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1);

    return totalPaths;
  }

  return dfs(root, 0);
};
```

---

## ⏱ Time & Space Complexity

- **Time:** O(n) — each node is visited once
- **Space:** O(h + n)

  - O(h): call stack for DFS
  - O(n): prefixSumMap in worst case (all unique sums)

---

Let me know if you’d like a diagram-based breakdown of how this runs on a specific input!
