# [120. Triangle (Medium)](https://leetcode.com/problems/triangle/)

<p>Given a <code>triangle</code> array, return <em>the minimum path sum from top to bottom</em>.</p>

<p>For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
<strong>Output:</strong> 11
<strong>Explanation:</strong> The triangle looks like:
   <u>2</u>
  <u>3</u> 4
 6 <u>5</u> 7
4 <u>1</u> 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> triangle = [[-10]]
<strong>Output:</strong> -10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= triangle.length &lt;= 200</code></li>
	<li><code>triangle[0].length == 1</code></li>
	<li><code>triangle[i].length == triangle[i - 1].length + 1</code></li>
	<li><code>-10<sup>4</sup> &lt;= triangle[i][j] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you&nbsp;do this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

---

Let me break it down simply for you.

You're given a triangle like this:

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```

Your goal: **Find the path from top to bottom with the smallest sum**, moving only to adjacent numbers on the row below.

---

### 🔁 Idea: Bottom-Up Dynamic Programming

Start from the **bottom** row and move **up**, modifying each cell to represent the **minimum total path sum** from that cell to the bottom.

---

### 🧠 Step-by-step Example

Let's take the triangle again:

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```

Start from the **second-last row**, and for each number, add the **minimum of the two numbers below it**:

#### Row 2 (`[6,5,7]`)

- `6` → `6 + min(4, 1) = 6 + 1 = 7`
- `5` → `5 + min(1, 8) = 5 + 1 = 6`
- `7` → `7 + min(8, 3) = 7 + 3 = 10`

Now row 2 becomes `[7, 6, 10]`

#### Row 1 (`[3,4]`)

- `3` → `3 + min(7, 6) = 3 + 6 = 9`
- `4` → `4 + min(6, 10) = 4 + 6 = 10`

Now row 1 becomes `[9, 10]`

#### Row 0 (`[2]`)

- `2` → `2 + min(9, 10) = 2 + 9 = 11`

Now row 0 becomes `[11]`

---

### ✅ Final Result

- The top element now holds the **minimum total path sum** → `11`

---

### 🔄 Why modify from bottom up?

Because each cell depends only on the two below it. By computing from the bottom up, we always have the values we need ready when we process a cell.

---

Let me know if you'd like a **top-down recursive version** or a version that doesn’t change the input triangle.
