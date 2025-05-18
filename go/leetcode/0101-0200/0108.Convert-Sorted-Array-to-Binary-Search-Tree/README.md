# [108. Convert Sorted Array to Binary Search Tree (Easy)](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

<p>Given an integer array <code>nums</code> where the elements are sorted in <strong>ascending order</strong>, convert <em>it to a <strong>height-balanced</strong> binary search tree</em>.</p>

<p>A <strong>height-balanced</strong> binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" style="width: 302px; height: 222px;">
<pre><strong>Input:</strong> nums = [-10,-3,0,5,9]
<strong>Output:</strong> [0,-3,9,-10,null,5]
<strong>Explanation:</strong> [0,-10,5,null,-3,null,9] is also accepted:
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" style="width: 302px; height: 222px;">
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" style="width: 342px; height: 142px;">
<pre><strong>Input:</strong> nums = [1,3]
<strong>Output:</strong> [3,1]
<strong>Explanation:</strong> [1,3] and [3,1] are both a height-balanced BSTs.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in a <strong>strictly increasing</strong> order.</li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [Facebook](https://leetcode.com/company/facebook), [Google](https://leetcode.com/company/google), [Apple](https://leetcode.com/company/apple)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/), [Tree](https://leetcode.com/tag/tree/), [Binary Search Tree](https://leetcode.com/tag/binary-search-tree/), [Binary Tree](https://leetcode.com/tag/binary-tree/)

**Similar Questions**:

- [Convert Sorted List to Binary Search Tree (Medium)](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

---

Sure! Let's walk through the Leetcode **108. Convert Sorted Array to Binary Search Tree** solution step by step so it makes sense.

---

### 🧩 Problem Summary

You are given a **sorted array** (in ascending order), and you must convert it into a **height-balanced binary search tree (BST)**.

- A **BST** means: left child < root < right child.
- A **height-balanced** BST means: for every node, the left and right subtrees’ heights differ by at most 1.

---

### ✅ Code

```js
var sortedArrayToBST = function (nums) {
  return createBST(nums, 0, nums.length - 1);
};

function createBST(nums, l, r) {
  if (l > r) return null;

  let mid = Math.floor(l + (r - l) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = createBST(nums, l, mid - 1);
  node.right = createBST(nums, mid + 1, r);

  return node;
}
```

---

### 🧠 Step-by-Step Explanation

Let's say the input is:

```js
nums = [-10, -3, 0, 5, 9];
```

---

#### 🔁 Step 1: Recursion Entry

We call:

```js
sortedArrayToBST(nums)
→ createBST(nums, 0, 4)  // full array
```

---

#### 🧮 Step 2: Find the Middle Element

```js
let mid = Math.floor((0 + 4) / 2) = 2
```

- `nums[2] = 0` → make this the **root node** of the tree.
- Why middle? Because it keeps the tree **balanced** — equal elements on left and right.

---

#### 🌲 Step 3: Build Left and Right Subtrees Recursively

##### Left Subtree

```js
createBST(nums, 0, 1) // [-10, -3]
mid = Math.floor((0 + 1)/2) = 0
→ TreeNode(-10)

Left: createBST(nums, 0, -1) → null
Right: createBST(nums, 1, 1) → TreeNode(-3)
```

##### Right Subtree

```js
createBST(nums, 3, 4) // [5, 9]
mid = Math.floor((3 + 4)/2) = 3
→ TreeNode(5)

Left: createBST(nums, 3, 2) → null
Right: createBST(nums, 4, 4) → TreeNode(9)
```

---

### 🌳 Final Tree Structure

```
        0
       / \
    -10   5
      \    \
     -3     9
```

This is a **valid BST** and **height-balanced**.

---

### 📌 Why It Works

- Choosing the **middle** of the current range ensures balance.
- Recursively building left and right from subranges mirrors how a BST is structured.

---

Let me know if you want a **visual animation**, **iterative version**, or explanation for a **similar problem** like converting a sorted linked list.
