# [99. Recover Binary Search Tree (Medium)](https://leetcode.com/problems/recover-binary-search-tree/)

<p>Two elements of a binary search tree (BST) are swapped by mistake.</p>

<p>Recover the tree without changing its structure.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> [1,3,null,null,2]

&nbsp;  1
&nbsp; /
&nbsp;3
&nbsp; \
&nbsp;  2

<strong>Output:</strong> [3,1,null,null,2]

&nbsp;  3
&nbsp; /
&nbsp;1
&nbsp; \
&nbsp;  2
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> [3,1,4,null,null,2]

  3
 / \
1   4
&nbsp;  /
&nbsp; 2

<strong>Output:</strong> [2,1,4,null,null,3]

  2
 / \
1   4
&nbsp;  /
 &nbsp;3
</pre>

<p><strong>Follow up:</strong></p>

<ul>
	<li>A solution using O(<em>n</em>) space is pretty straight forward.</li>
	<li>Could you devise a constant space solution?</li>
</ul>

**Related Topics**:  
[Tree](https://leetcode.com/tag/tree/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)

---

Let’s walk through a **step-by-step example** of how the solution to **Leetcode 99. Recover Binary Search Tree** works.

---

## 🧪 Example Input (Swapped BST):

Suppose we have the tree:

```
    3
   / \
  1   4
     /
    2
```

This is supposed to be a valid BST, but **nodes 2 and 3 are swapped**.
The correct BST should be:

```
    2
   / \
  1   4
     /
    3
```

We need to **detect** the swapped nodes (`3` and `2`) and **swap their values back**.

---

## 🔍 Step 1: In-Order Traversal

We’ll traverse the tree in in-order: **left → root → right**, and track:

- `prev`: last visited node
- `first`: first wrong node
- `second`: second wrong node

Let’s traverse and observe what happens:

---

### ➤ Start at root = 3

#### ➤ Traverse Left Subtree → node = 1

- Left of 1 is `null`, return.
- Visit node `1`:

  - `prev = null` → no check.
  - `prev = 1`

- Right of 1 is `null`, return.

📝 So far: `prev = 1`

---

### ➤ Back to root = 3

- Visit node `3`:

  - `prev = 1` → `1 < 3` ✅
  - Update `prev = 3`

---

### ➤ Traverse Right Subtree → node = 4

#### ➤ Traverse Left Subtree → node = 2

- Left of 2 is `null`, return.
- Visit node `2`:

  - `prev = 3`
  - ❗ `3 > 2` → not valid in BST

➡️ **First violation** found:

- `first = 3`
- `second = 2`
- Update `prev = 2`

---

#### ➤ Back to node = 4

- Visit node `4`:

  - `prev = 2`
  - `2 < 4` ✅
  - Update `prev = 4`

---

## ✅ Swapped Nodes Detected

We found:

- `first = 3`
- `second = 2`

So the algorithm will now **swap values of 3 and 2**, making the BST valid again.

---

## ✅ Final Fixed Tree:

```
    2
   / \
  1   4
     /
    3
```

Now an in-order traversal gives `1, 2, 3, 4`, which is valid.

---

## 🔁 Summary

- In-order of incorrect tree: `1, 3, 2, 4` → 🔥 Violation at `3 > 2`
- The algorithm detects and stores `first = 3`, `second = 2`
- It swaps their values to recover the BST.

Let me know if you want this implemented with **Morris Traversal (O(1) space)** too!
