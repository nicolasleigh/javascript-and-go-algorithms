# [542. 01 Matrix (Medium)](https://leetcode.com/problems/01-matrix)

<p>Given an <code>m x n</code> binary matrix <code>mat</code>, return <em>the distance of the nearest </em><code>0</code><em> for each cell</em>.</p>
<p>The distance between two adjacent cells is <code>1</code>.</p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg" style="width: 253px; height: 253px;">
<pre><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[0,0,0]]
</pre>
<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg" style="width: 253px; height: 253px;">
<pre><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[1,1,1]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[1,2,1]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
	<li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
	<li>There is at least one <code>0</code> in <code>mat</code>.</li>
</ul>

**Companies**:
[Microsoft](https://leetcode.com/company/microsoft), [Google](https://leetcode.com/company/google), [Amazon](https://leetcode.com/company/amazon)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Breadth-First Search](https://leetcode.com/tag/breadth-first-search/), [Matrix](https://leetcode.com/tag/matrix/)

**Similar Questions**:

- [Shortest Path to Get Food (Medium)](https://leetcode.com/problems/shortest-path-to-get-food/)
- [Minimum Operations to Remove Adjacent Ones in Matrix (Hard)](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/)
- [Difference Between Ones and Zeros in Row and Column (Medium)](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/)

Note: This question is the same as 1765: https://leetcode.com/problems/map-of-highest-peak/

---

Sure! Let’s break down the **BFS solution** for **LeetCode 542. 01 Matrix** step by step with explanations and visuals.

---

## 🔧 Problem Summary:

You're given a binary matrix (`0`s and `1`s), and you need to return a matrix where each cell containing `1` is replaced with the **shortest distance to the nearest `0`**.

- Distance is measured in **steps** between **adjacent cells**: up, down, left, right.

---

## 💡 Why BFS Works Here

When you're looking for **shortest paths** from multiple sources (all the `0`s) to other nodes (the `1`s), **Breadth-First Search (BFS)** is the optimal approach.

- Think of all the `0`s as starting points.
- From each `0`, you spread out in layers (BFS), updating any neighboring `1` with the shortest possible distance.

---

## 🧭 Algorithm Walkthrough

### 🔹 Step 1: Initialize the Matrix

Loop through the matrix:

- If the cell is `0`, push its coordinates into a queue.
- If the cell is `1`, set it to `Infinity` (or a large number) to mark it as "unvisited".

```js
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (mat[i][j] === 0) {
      queue.push([i, j]); // BFS starts from all 0s
    } else {
      mat[i][j] = Infinity; // Mark as unprocessed
    }
  }
}
```

---

### 🔹 Step 2: Breadth-First Search

Now we start BFS from all `0`s simultaneously.

- At each step, pop a cell from the queue.
- Look at its 4 neighbors.
- If a neighbor has a greater value than the current cell + 1, it means we found a **shorter path** to that cell.
- Update it and push it into the queue to continue exploring from there.

```js
while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
      if (mat[nx][ny] > mat[x][y] + 1) {
        mat[nx][ny] = mat[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}
```

---

## 🔍 Example Input:

```
Input:
[
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
]
```

### Step-by-step result:

```
Initial:
[
  [0, 0, 0],
  [0, ∞, 0],
  [∞, ∞, ∞]
]

After BFS:
[
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1]
]
```

---

## ⏱️ Time and Space Complexity

### Time Complexity: **O(m × n)**

- Each cell is visited at most once.

### Space Complexity: **O(m × n)**

- Queue holds up to `m × n` elements in worst case.

---

## ✅ Summary

- We use BFS starting from all `0`s.
- We update each `1` with the shortest distance as we spread out layer by layer.
- The algorithm is efficient and avoids recomputing distances.

Let me know if you want to see a **Dynamic Programming (DP) approach** too (two passes: top-left to bottom-right and vice versa)!

---

Great question: **Why is this algorithm considered Breadth-First Search (BFS)?**

---

### 🧭 Quick Reminder: What is BFS?

**Breadth-First Search** is a graph traversal algorithm where:

- You start from one or more **source nodes**.
- You explore all **nodes at distance 1** (immediate neighbors),
- then all **nodes at distance 2**,
- and so on — like ripples spreading out in layers.

It uses a **queue (FIFO)** to maintain the order in which nodes are explored.

---

### ✅ Why BFS is Used in This Problem

#### Problem:

You are given a grid (2D matrix) where:

- `0` = source node(s)
- `1` = target(s) that must find the **shortest distance** to a `0`

You must compute the **minimum number of steps** each `1` needs to reach the **nearest `0`**.

#### Why BFS is the right fit:

- You need the **shortest path in an unweighted grid** (each move costs 1).
- From each `0`, you're looking for the closest `1`s around it.
- You don’t want to go deep in one direction first (which DFS would do); instead, you want to **expand outward evenly**.

BFS guarantees that the **first time** you reach a cell, it's via the **shortest path**, because it explores in layers.

---

### 🔄 How the Algorithm Applies BFS

In this line:

```js
queue.push([i, j]);
```

You start BFS from **all 0s** (multi-source BFS).

Then in this loop:

```js
while (queue.length > 0) {
  const [x, y] = queue.shift(); // FIFO
  // check 4 neighbors...
}
```

You:

- Use a **queue**, not a stack
- Process cells **level by level** — cells with distance 1 from any 0, then 2, etc.

That’s exactly how **BFS** behaves.

---

### 🔁 BFS in Layers — Visually:

Imagine this matrix:

```
[1, 1, 1]
[1, 0, 1]
[1, 1, 1]
```

At the start:

- Distance 0: \[1,1]
- BFS adds all neighbors of \[1,1] to the queue → distance 1
- Then from those, adds their neighbors → distance 2
- And so on.

---

### 🧠 Key Idea

> **BFS always finds the shortest path in an unweighted graph or grid.**
> That's why it's used here — and why it works.

Let me know if you want a visual simulation or a comparison with DFS!
