# [547. Number of Provinces (Medium)](https://leetcode.com/problems/number-of-provinces/description/)

<div><div class="elfjS" data-track-load="description_content"><p>There are <code>n</code> cities. Some of them are connected, while some are not. If city <code>a</code> is connected directly with city <code>b</code>, and city <code>b</code> is connected directly with city <code>c</code>, then city <code>a</code> is connected indirectly with city <code>c</code>.</p>

<p>A <strong>province</strong> is a group of directly or indirectly connected cities and no other cities outside of the group.</p>

<p>You are given an <code>n x n</code> matrix <code>isConnected</code> where <code>isConnected[i][j] = 1</code> if the <code>i<sup>th</sup></code> city and the <code>j<sup>th</sup></code> city are directly connected, and <code>isConnected[i][j] = 0</code> otherwise.</p>

<p>Return <em>the total number of <strong>provinces</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg" style="width: 222px; height: 142px;">
<pre><strong>Input:</strong> isConnected = [[1,1,0],[1,1,0],[0,0,1]]
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg" style="width: 222px; height: 142px;">
<pre><strong>Input:</strong> isConnected = [[1,0,0],[0,1,0],[0,0,1]]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 200</code></li>
	<li><code>n == isConnected.length</code></li>
	<li><code>n == isConnected[i].length</code></li>
	<li><code>isConnected[i][j]</code> is <code>1</code> or <code>0</code>.</li>
	<li><code>isConnected[i][i] == 1</code></li>
	<li><code>isConnected[i][j] == isConnected[j][i]</code></li>
</ul>
</div></div>

**Companies**:  
[Two Sigma](https://leetcode.com/company/two-sigma), [LinkedIn](https://leetcode.com/company/linkedin), [Bloomberg](https://leetcode.com/company/bloomberg), [Microsoft](https://leetcode.com/company/microsoft)

**Related Topics**:  
[Depth-first Search](https://leetcode.com/tag/depth-first-search/), [Union Find](https://leetcode.com/tag/union-find/)

**Similar Questions**:

- [Number of Connected Components in an Undirected Graph (Medium)](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- [Robot Return to Origin (Easy)](https://leetcode.com/problems/robot-return-to-origin/)
- [Sentence Similarity (Easy)](https://leetcode.com/problems/sentence-similarity/)
- [Sentence Similarity II (Medium)](https://leetcode.com/problems/sentence-similarity-ii/)

---

Absolutely! Let’s break down the **DFS approach** to LeetCode **547. Number of Provinces** in a clear, visual, and step-by-step way.

---

## 🔍 Problem Recap

You are given a **connection matrix** `isConnected`, where:

- `isConnected[i][j] = 1` means city `i` is connected directly to city `j`
- `isConnected[i][j] = 0` means no direct connection

A **province** is a group of **directly or indirectly connected** cities.

Your task is to **count how many disconnected groups** (provinces) exist.

---

## 🗺️ Visual Example

### Input:

```js
[
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
```

This represents 3 cities (0, 1, 2):

- City 0 is connected to city 1
- City 2 is only connected to itself

### Visually:

```
Province 1: 0 — 1
Province 2: 2
```

So the output is `2`.

---

## ✅ DFS Concept

**Depth-First Search (DFS)** is a recursive method to explore **all connected nodes** from a given node.

In this problem:

- Think of the matrix as an **undirected graph**
- We use DFS to explore all cities connected to a starting city
- Once we've explored a province, we mark all its cities as **visited**
- We then move to the next unvisited city and repeat the process

---

## 🧠 Step-by-Step Walkthrough

```js
const n = isConnected.length;
const visited = new Array(n).fill(false);
let provinces = 0;
```

- `n`: number of cities
- `visited`: tracks if a city has been visited
- `provinces`: counts the total number of provinces

### DFS Function

```js
function dfs(city) {
  for (let neighbor = 0; neighbor < n; neighbor++) {
    if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
      visited[neighbor] = true;
      dfs(neighbor); // recursively visit connected city
    }
  }
}
```

- For the current city, we look at all possible connections (`neighbor`)
- If there's a connection and the neighbor hasn't been visited, recurse on it

### Main Loop

```js
for (let i = 0; i < n; i++) {
  if (!visited[i]) {
    visited[i] = true;
    dfs(i); // explore all cities in this province
    provinces++; // count one new province
  }
}
```

- For every unvisited city, start a DFS
- Mark the whole group as visited
- Increase the province count by 1

---

## 🔁 Example Walkthrough

With input:

```js
[
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
```

1. `i = 0`, not visited → run `dfs(0)`

   - `dfs(0)` → visit 1 → `dfs(1)`
   - All connected cities \[0,1] are visited
   - `provinces = 1`

2. `i = 1`, already visited → skip

3. `i = 2`, not visited → run `dfs(2)`

   - Only 2 is connected to itself
   - `provinces = 2`

---

## 🧮 Complexity

- **Time:** O(n²)
  We may check every pair of cities (i, j)

- **Space:** O(n)
  `visited` array + recursion stack (up to n levels)

---

## ✅ Summary

- Treat the matrix as a graph
- Use DFS to explore each group of connected cities
- Each disconnected DFS call = one province

---

Let me know if you’d like:

- A **Union-Find (Disjoint Set)** solution
- A **step-by-step debug trace**
- Or how to convert this to **BFS** or **iterative** DFS
