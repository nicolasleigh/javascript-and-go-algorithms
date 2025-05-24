# [378. Kth Smallest Element in a Sorted Matrix (Medium)](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

<p>Given an <code>n x n</code> <code>matrix</code> where each of the rows and columns are sorted in ascending order, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest element in the matrix</em>.</p>

<p>Note that it is the <code>k<sup>th</sup></code> smallest element <strong>in the sorted order</strong>, not the <code>k<sup>th</sup></code> <strong>distinct</strong> element.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
<strong>Output:</strong> 13
<strong>Explanation:</strong> The elements in the matrix are [1,5,9,10,11,12,13,<u><strong>13</strong></u>,15], and the 8<sup>th</sup> smallest number is 13
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> matrix = [[-5]], k = 1
<strong>Output:</strong> -5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 300</code></li>
	<li><code>-10<sup>9</sup> &lt;= matrix[i][j] &lt;= 10<sup>9</sup></code></li>
	<li>All the rows and columns of <code>matrix</code> are <strong>guaranteed</strong> to be sorted in <strong>non-decreasing order</strong>.</li>
	<li><code>1 &lt;= k &lt;= n<sup>2</sup></code></li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [Facebook](https://leetcode.com/company/facebook), [Apple](https://leetcode.com/company/apple)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/), [Sorting](https://leetcode.com/tag/sorting/), [Heap (Priority Queue)](https://leetcode.com/tag/heap-priority-queue/), [Matrix](https://leetcode.com/tag/matrix/)

**Similar Questions**:

- [Find K Pairs with Smallest Sums (Medium)](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
- [Kth Smallest Number in Multiplication Table (Hard)](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)
- [Find K-th Smallest Pair Distance (Hard)](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
- [K-th Smallest Prime Fraction (Hard)](https://leetcode.com/problems/k-th-smallest-prime-fraction/)

---

Absolutely! Let's break down the **Binary Search** solution to **LeetCode 378 – Kth Smallest Element in a Sorted Matrix**, which is a clever use of binary search **on the value range**, not array indices.

---

## 🧠 Problem Summary:

Given an `n x n` matrix:

- Each row is sorted in ascending order.
- Each column is sorted in ascending order.
- Find the **k-th smallest** element in the matrix.

---

## 🛠️ Key Insight:

We **can't** do a regular linear search because that’s too slow.

Instead, we binary search in the **range of possible values**:

- The **smallest** value is `matrix[0][0]`.
- The **largest** is `matrix[n-1][n-1]`.

We search this range using binary search, and for each guess `mid`, we ask:

> "How many elements in the matrix are **≤ mid**?"

If the count is **less than k**, the k-th smallest must be **greater** than `mid`.
If the count is **greater than or equal to k**, the k-th smallest could be **≤ mid**, so we reduce the search range.

---

## 🔢 Example:

```js
matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
k = 8;
```

We want the 8th smallest element.

The value range: `left = 1`, `right = 15`.

We use binary search to find the smallest number such that **there are at least `k` numbers ≤ it.**

---

## 🔁 How do we count elements ≤ `mid`?

We use this function:

```js
const countLessEqual = (mid) => {
  let count = 0;
  let row = n - 1,
    col = 0;
  while (row >= 0 && col < n) {
    if (matrix[row][col] <= mid) {
      count += row + 1;
      col++;
    } else {
      row--;
    }
  }
  return count;
};
```

### 🔍 How it works:

- We start at **bottom-left** of matrix.
- If `matrix[row][col] <= mid`, everything **above** is also ≤ mid (because columns are sorted). So we count `row + 1` elements and move **right**.
- If `matrix[row][col] > mid`, we move **up** to smaller numbers.

This gives an **O(n)** count.

---

## ✅ Full Code:

```js
function kthSmallest(matrix, k) {
  const n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  const countLessEqual = (mid) => {
    let count = 0,
      row = n - 1,
      col = 0;
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countLessEqual(mid) < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
```

---

## 🧠 Time & Space Complexity

| Complexity | Value                 |
| ---------- | --------------------- |
| Time       | O(n × log(max - min)) |
| Space      | O(1)                  |

- `n` is the number of rows/columns.
- `max - min` is the range of values in the matrix.

---

Let me know if you’d like a dry-run visual with real values step by step!
