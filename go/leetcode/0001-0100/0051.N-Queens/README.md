# [51. N-Queens (Hard)](https://leetcode.com/problems/n-queens/)

<p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p>

<p>Given an integer <code>n</code>, return <em>all distinct solutions to the <strong>n-queens puzzle</strong></em>.</p>

<p>Each solution contains a distinct board configuration of the n-queens' placement, where <code>'Q'</code> and <code>'.'</code> both indicate a queen and an empty space, respectively.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" style="width: 600px; height: 268px;">
<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
<strong>Explanation:</strong> There exist two distinct solutions to the 4-queens puzzle as shown above
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> [["Q"]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 9</code></li>
</ul>

**Related Topics**:  
[Backtracking](https://leetcode.com/tag/backtracking/)

**Similar Questions**:

- [N-Queens II (Hard)](https://leetcode.com/problems/n-queens-ii/)
- [Grid Illumination (Hard)](https://leetcode.com/problems/grid-illumination/)

---

Sure! Here's a visual explanation of **diagonals in the N-Queens problem**, and how we use them for fast conflict detection during backtracking.

---

### 🎯 Goal:

Prevent placing two queens on the **same column**, **same ↘ diagonal**, or **same ↙ diagonal**.

---

### 🟦 Chessboard:

Imagine a 4×4 board:

```
(0,0) (0,1) (0,2) (0,3)
(1,0) (1,1) (1,2) (1,3)
(2,0) (2,1) (2,2) (2,3)
(3,0) (3,1) (3,2) (3,3)
```

---

### 🔸 Columns:

Easy — column `j` is the same in every row. So if you place a queen at `(2,1)`, you can't place another queen in **column 1**.

---

### 🔹 Diagonal ↘ (Top-left to bottom-right):

- These are diagonals where the **difference (row - col)** is constant.
- Example: all cells on the same ↘ diagonal have the same `row - col`.

```
(0,0) → 0-0 = 0
(1,1) → 1-1 = 0
(2,2) → 2-2 = 0
(3,3) → 3-3 = 0
```

So `diag1` tracks `row - col`. If that value has been used, the ↘ diagonal is blocked.

---

### 🔸 Diagonal ↙ (Top-right to bottom-left):

- These diagonals have a constant **sum (row + col)**.
- Example: all cells on the same ↙ diagonal have the same `row + col`.

```
(0,3) → 0+3 = 3
(1,2) → 1+2 = 3
(2,1) → 2+1 = 3
(3,0) → 3+0 = 3
```

So `diag2` tracks `row + col`. If that value has been used, the ↙ diagonal is blocked.

---

### ✅ Why this is great:

Using sets of:

- `cols`: which columns have a queen.
- `diag1`: which ↘ diagonals are blocked (track `row - col`).
- `diag2`: which ↙ diagonals are blocked (track `row + col`).

You can detect conflicts **instantly** without scanning the board.

---

Let me know if you'd like a diagram or animation!
