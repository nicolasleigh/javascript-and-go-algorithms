# [474. Ones and Zeroes (Medium)](https://leetcode.com/problems/ones-and-zeroes)

<p>You are given an array of binary strings <code>strs</code> and two integers <code>m</code> and <code>n</code>.</p>

<p>Return <em>the size of the largest subset of <code>strs</code> such that there are <strong>at most</strong> </em><code>m</code><em> </em><code>0</code><em>&#39;s and </em><code>n</code><em> </em><code>1</code><em>&#39;s in the subset</em>.</p>

<p>A set <code>x</code> is a <strong>subset</strong> of a set <code>y</code> if all elements of <code>x</code> are also elements of <code>y</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;10&quot;,&quot;0001&quot;,&quot;111001&quot;,&quot;1&quot;,&quot;0&quot;], m = 5, n = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> The largest subset with at most 5 0&#39;s and 3 1&#39;s is {&quot;10&quot;, &quot;0001&quot;, &quot;1&quot;, &quot;0&quot;}, so the answer is 4.
Other valid but smaller subsets include {&quot;0001&quot;, &quot;1&quot;} and {&quot;10&quot;, &quot;1&quot;, &quot;0&quot;}.
{&quot;111001&quot;} is an invalid subset because it contains 4 1&#39;s, greater than the maximum of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;10&quot;,&quot;0&quot;,&quot;1&quot;], m = 1, n = 1
<strong>Output:</strong> 2
<b>Explanation:</b> The largest subset is {&quot;0&quot;, &quot;1&quot;}, so the answer is 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 600</code></li>
	<li><code>1 &lt;= strs[i].length &lt;= 100</code></li>
	<li><code>strs[i]</code> consists only of digits <code>&#39;0&#39;</code> and <code>&#39;1&#39;</code>.</li>
	<li><code>1 &lt;= m, n &lt;= 100</code></li>
</ul>

**Companies**:
[Uber](https://leetcode.com/company/uber), [Google](https://leetcode.com/company/google), [Adobe](https://leetcode.com/company/adobe), [Amazon](https://leetcode.com/company/amazon), [Apple](https://leetcode.com/company/apple)

**Related Topics**:  
[Array](https://leetcode.com/tag/array), [String](https://leetcode.com/tag/string), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming)

**Similar Questions**:

- [Count Subarrays With More Ones Than Zeros (Medium)](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros)
- [Non-negative Integers without Consecutive Ones (Hard)](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones)
- [All Divisions With the Highest Score of a Binary Array (Medium)](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array)

---

Great! Let's walk through a **full dry-run** of the LeetCode **474. Ones and Zeroes** solution on a **small input**, step by step.

---

## 🧪 Input Example:

```js
strs = ["10", "0001", "1"]
m = 2  // max zeros
n = 2  // max ones
```

Goal: Select the **maximum number of strings** from `strs` so that total 0s ≤ `m` and total 1s ≤ `n`.

---

## ✅ Step 1: Initialize DP table

We create a `(m+1) x (n+1)` table filled with 0s:

```
Initial DP table (m=2, n=2):

    0  1  2
  ---------
0 | 0  0  0
1 | 0  0  0
2 | 0  0  0
```

---

## 🧩 Step 2: Process string `"10"`

* `"10"` has **1 zero**, **1 one**

We update the DP table **backwards**:

```js
for (i = 2; i >= 1; i--) {
  for (j = 2; j >= 1; j--) {
    dp[i][j] = max(dp[i][j], dp[i - 1][j - 1] + 1);
  }
}
```

### Updates:

* `dp[2][2] = max(0, dp[1][1] + 1) = 1`
* `dp[2][1] = max(0, dp[1][0] + 1) = 1`
* `dp[1][2] = max(0, dp[0][1] + 1) = 1`
* `dp[1][1] = max(0, dp[0][0] + 1) = 1`

### Updated DP:

```
    0  1  2
  ---------
0 | 0  0  0
1 | 0  1  1
2 | 0  1  1
```

---

## 🧩 Step 3: Process string `"0001"`

* `"0001"` has **3 zeros**, **1 one**

We **skip** this string because it needs 3 zeros, but `m = 2` → not enough zero budget

No change to the table.

---

## 🧩 Step 4: Process string `"1"`

* `"1"` has **0 zeros**, **1 one**

We update the DP table **backwards**:

```js
for (i = 2; i >= 0; i--) {
  for (j = 2; j >= 1; j--) {
    dp[i][j] = max(dp[i][j], dp[i][j - 1] + 1);
  }
}
```

### Selected updates:

* `dp[2][2] = max(1, dp[2][1] + 1) = max(1, 1 + 1) = 2`
* `dp[2][1] = max(1, dp[2][0] + 1) = max(1, 0 + 1) = 1` ✅ unchanged
* `dp[1][2] = max(1, dp[1][1] + 1) = max(1, 1 + 1) = 2`
* `dp[1][1] = max(1, dp[1][0] + 1) = max(1, 0 + 1) = 1` ✅ unchanged
* `dp[0][2] = max(0, dp[0][1] + 1) = 1`
* `dp[0][1] = max(0, dp[0][0] + 1) = 1`

### Final DP:

```
    0  1  2
  ---------
0 | 0  1  1
1 | 0  1  2
2 | 0  1  2
```

---

## 🎯 Final Answer:

```js
return dp[m][n] = dp[2][2] = 2
```

So, we can pick at most **2 strings** within the given 0s and 1s budget.

---

## 📘 Which strings were chosen?

Out of `["10", "0001", "1"]`:

* "0001" is skipped (needs 3 zeroes)
* We can choose:

  * `"10"` (1 zero, 1 one)
  * `"1"` (0 zero, 1 one)
    → Total: 1+0=1 zero, 1+1=2 ones ✅ fits within (m=2, n=2)

---

## ✅ Summary:

| Step | String | 0s | 1s | Used? | DP Table Updated? |
| ---- | ------ | -- | -- | ----- | ----------------- |
| 1    | "10"   | 1  | 1  | ✅     | Yes               |
| 2    | "0001" | 3  | 1  | ❌     | No                |
| 3    | "1"    | 0  | 1  | ✅     | Yes               |

---

Let me know if you want a Go version of this code, or a visual illustration of the 3D DP state!
