# [95. Unique Binary Search Trees II (Medium)](https://leetcode.com/problems/unique-binary-search-trees-ii)

<p>Given an integer <code>n</code>, return <em>all the structurally unique <strong>BST'</strong>s (binary search trees), which has exactly </em><code>n</code><em> nodes of unique values from</em> <code>1</code> <em>to</em> <code>n</code>. Return the answer in <strong>any order</strong>.</p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg" style="width: 600px; height: 148px;">
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> [[1]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>1 &lt;= n &lt;= 8</code></li>
</ul>

**Companies**:
[Adobe](https://leetcode.com/company/adobe), [Bloomberg](https://leetcode.com/company/bloomberg), [Uber](https://leetcode.com/company/uber)

**Related Topics**:  
[Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Backtracking](https://leetcode.com/tag/backtracking/), [Tree](https://leetcode.com/tag/tree/), [Binary Search Tree](https://leetcode.com/tag/binary-search-tree/), [Binary Tree](https://leetcode.com/tag/binary-tree/)

**Similar Questions**:

- [Unique Binary Search Trees (Medium)](https://leetcode.com/problems/unique-binary-search-trees/)
- [Different Ways to Add Parentheses (Medium)](https://leetcode.com/problems/different-ways-to-add-parentheses/)

---

Great! Let’s walk through the solution step-by-step for **`n = 2`**, so you can see **how trees are built recursively** and why this approach works.

---

## 🧩 Problem Input:

```js
generateTrees(2);
```

So we want all **unique BSTs** using numbers `1` and `2`.

---

## 🌱 Step 1: Start from `buildTree(1, 2)`

We'll try **every number between 1 and 2** as the root node.

### First, try `i = 1` as root:

```js
leftSubtrees = buildTree(1, 0); // returns [null]
rightSubtrees = buildTree(2, 2); // returns all BSTs for [2]
```

#### ➤ `buildTree(1, 0)` returns `[null]` (empty left subtree)

#### ➤ `buildTree(2, 2)`:

- Try `i = 2` as root
- left = buildTree(2, 1) → `[null]`
- right = buildTree(3, 2) → `[null]`
- Combine them: root = TreeNode(2)

So:

```js
rightSubtrees = [TreeNode(2)];
```

Now combine left + right with root `1`:

```
  1
   \
    2
```

---

### Now try `i = 2` as root:

```js
leftSubtrees = buildTree(1, 1); // all BSTs for [1]
rightSubtrees = buildTree(3, 2); // returns [null]
```

#### ➤ `buildTree(1, 1)`:

- Try `i = 1`
- left = buildTree(1, 0) → `[null]`
- right = buildTree(2, 1) → `[null]`
- Combine them: root = TreeNode(1)

So:

```js
leftSubtrees = [TreeNode(1)];
```

Now combine left + right with root `2`:

```
  2
 /
1
```

---

## ✅ Final Result for `n = 2`:

Two trees:

### Tree 1:

```
  1
   \
    2
```

### Tree 2:

```
  2
 /
1
```

And that's exactly what the function returns — two different BSTs using values 1 and 2.

---

Would you like me to show a **console-based visualization function** so you can print and inspect the trees?
