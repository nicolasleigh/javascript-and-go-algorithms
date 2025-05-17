# [84. Largest Rectangle in Histogram (Hard)](https://leetcode.com/problems/largest-rectangle-in-histogram/)

<p>Given an array of integers <code>heights</code> representing the histogram's bar height where the width of each bar is <code>1</code>, return <em>the area of the largest rectangle in the histogram</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg" style="width: 522px; height: 242px;">
<pre><strong>Input:</strong> heights = [2,1,5,6,2,3]
<strong>Output:</strong> 10
<strong>Explanation:</strong> The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg" style="width: 202px; height: 362px;">
<pre><strong>Input:</strong> heights = [2,4]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= heights.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= heights[i] &lt;= 10<sup>4</sup></code></li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [Microsoft](https://leetcode.com/company/microsoft), [Adobe](https://leetcode.com/company/adobe), [Google](https://leetcode.com/company/google), [Facebook](https://leetcode.com/company/facebook), [Uber](https://leetcode.com/company/uber), [Snapchat](https://leetcode.com/company/snapchat), [HBO](https://leetcode.com/company/hbo), [ByteDance](https://leetcode.com/company/bytedance)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Stack](https://leetcode.com/tag/stack/), [Monotonic Stack](https://leetcode.com/tag/monotonic-stack/)

**Similar Questions**:

- [Maximal Rectangle (Hard)](https://leetcode.com/problems/maximal-rectangle/)
- [Maximum Score of a Good Subarray (Hard)](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)

---

Let's walk through the **Largest Rectangle in Histogram** problem using a **monotonic increasing stack** step by step.

---

## 🧩 Problem

Given `heights = [2,1,5,6,2,3]`, return the **area** of the largest rectangle in the histogram.

Each bar has a width of `1`.

---

## 🔍 Idea

Use a **monotonic increasing stack of indices** to track bars that are **taller** than the previous. When a **shorter bar** is encountered, we pop from the stack and calculate areas, because the popped bar cannot extend further.

To simplify edge cases, we **pad the input** with a `0` at both ends:

```js
heights = [0, 2, 1, 5, 6, 2, 3, 0];
```

---

## 🧮 Walkthrough

### Initialization:

```js
heights = [0, 2, 1, 5, 6, 2, 3, 0];
stack = [];
maxArea = 0;
```

---

### 🔁 Loop over each `i` from 0 to 7

#### i = 0, heights\[0] = 0

Stack is empty → push 0
`stack = [0]`

#### i = 1, heights\[1] = 2

2 > 0 (heights\[stack\[-1]]) → push 1
`stack = [0, 1]`

#### i = 2, heights\[2] = 1

1 < 2 → pop 1
Calculate area:

- height = 2
- width = 2 - 0 - 1 = 1
- area = 2 × 1 = 2
  → `maxArea = 2`

Now 1 == 0 → push 2
`stack = [0, 2]`

#### i = 3, heights\[3] = 5

5 > 1 → push 3
`stack = [0, 2, 3]`

#### i = 4, heights\[4] = 6

6 > 5 → push 4
`stack = [0, 2, 3, 4]`

#### i = 5, heights\[5] = 2

2 < 6 → pop 4

- height = 6
- width = 5 - 3 - 1 = 1
- area = 6 × 1 = 6
  → `maxArea = 6`

2 < 5 → pop 3

- height = 5
- width = 5 - 2 - 1 = 2
- area = 5 × 2 = 10
  → `maxArea = 10`

Push 5
`stack = [0, 2, 5]`

#### i = 6, heights\[6] = 3

3 > 2 → push 6
`stack = [0, 2, 5, 6]`

#### i = 7, heights\[7] = 0

0 < 3 → pop 6

- height = 3
- width = 7 - 5 - 1 = 1
- area = 3 × 1 = 3
  → `maxArea = 10`

0 < 2 → pop 5

- height = 2
- width = 7 - 2 - 1 = 4
- area = 2 × 4 = 8
  → `maxArea = 10`

0 < 1 → pop 2

- height = 1
- width = 7 - 0 - 1 = 6
- area = 1 × 6 = 6
  → `maxArea = 10`

Now push 7
`stack = [0, 7]`

---

## ✅ Final Answer:

```js
maxArea = 10;
```

---

## 🧠 Key Points

- Stack stores **indices**, not values.
- We pop when **current height < stack top height**.
- Width is calculated using the index below the popped bar:

  ```js
  width = currentIndex - stackTopIndex - 1;
  ```

- Padding with 0 on both ends ensures **all bars are processed**.

---

Let me know if you'd like a diagram or code version as well!
