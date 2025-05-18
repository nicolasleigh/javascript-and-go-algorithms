# [97. Interleaving String (Medium)](https://leetcode.com/problems/interleaving-string)

<p>Given strings <code>s1</code>, <code>s2</code>, and <code>s3</code>, find whether <code>s3</code> is formed by an <strong>interleaving</strong> of <code>s1</code> and <code>s2</code>.</p>
<p>An <strong>interleaving</strong> of two strings <code>s</code> and <code>t</code> is a configuration where <code>s</code> and <code>t</code> are divided into <code>n</code> and <code>m</code> <span data-keyword="substring-nonempty" datakeyword="substring-nonempty" class=" cursor-pointer relative text-dark-blue-s text-sm"><div class="popover-wrapper inline-block" data-headlessui-state=""><div><div id="headlessui-popover-button-:r61:" aria-expanded="false" data-headlessui-state=""><div>substrings</div></div><div style="position: fixed; z-index: 9999; inset: 0px auto auto 0px; transform: translate(62px, 279px);"></div></div></div></span> respectively, such that:</p>
<ul>
	<li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code></li>
	<li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code></li>
	<li><code>|n - m| &lt;= 1</code></li>
	<li>The <strong>interleaving</strong> is <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> or <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></li>
</ul>
<p><strong>Note:</strong> <code>a + b</code> is the concatenation of strings <code>a</code> and <code>b</code>.</p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg" style="width: 561px; height: 203px;">
<pre><strong>Input:</strong> s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
<strong>Output:</strong> true
<strong>Explanation:</strong> One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
<strong>Output:</strong> false
<strong>Explanation:</strong> Notice how it is impossible to interleave s2 with any other string to obtain s3.
</pre>
<p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> s1 = "", s2 = "", s3 = ""
<strong>Output:</strong> true
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>0 &lt;= s1.length, s2.length &lt;= 100</code></li>
	<li><code>0 &lt;= s3.length &lt;= 200</code></li>
	<li><code>s1</code>, <code>s2</code>, and <code>s3</code> consist of lowercase English letters.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you solve it using only <code>O(s2.length)</code> additional memory space?</p>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Adobe](https://leetcode.com/company/adobe), [Google](https://leetcode.com/company/google)

**Related Topics**:  
[String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

---

Sure! Let’s walk through a **step-by-step example** of Leetcode **97. Interleaving String** using the JavaScript solution we just wrote.

---

## 🔍 Example:

```js
s1 = "aab";
s2 = "axy";
s3 = "aaxaaby";
```

### ❓ Question:

Can we form `"aaxaaby"` by interleaving `"aab"` and `"axy"` (in order)?

---

## ✅ Step 1: Check Length

`s1.length = 3`
`s2.length = 3`
`s3.length = 7`

> ❌ `3 + 3 !== 7`, so the function should return `false`.

But that's a mistake! Let's change to a valid example where lengths match.

---

## 🔁 Use Valid Input

Let's use:

```js
s1 = "aab";
s2 = "axy";
s3 = "aaxaby";
```

Here:

- `s1.length = 3`
- `s2.length = 3`
- `s3.length = 6` → ✅ `3 + 3 === 6`

Now we’ll check if `s3` can be built by **interleaving** characters from `s1` and `s2`.

---

## 📐 DP Table Definition

Create a 2D table `dp[m+1][n+1]`
`dp[i][j] = true` means we can form `s3[0...i+j-1]` using `s1[0...i-1]` and `s2[0...j-1]`

Let’s initialize a 4×4 table (since `m = n = 3`):

```
Initial DP:
   ''  a   x   y
'' T   F   F   F
a  F   F   F   F
a  F   F   F   F
b  F   F   F   F
```

---

## 🧱 Step-by-Step Filling

### 🎯 Base Cases

#### `dp[0][0] = true` → empty strings form empty string ✅

#### Fill 1st column: only using `s1`

We compare `s1[i-1]` with `s3[i-1]`

- `s1[0] = a`, `s3[0] = a` → `dp[1][0] = true`
- `s1[1] = a`, `s3[1] = a` → `dp[2][0] = true`
- `s1[2] = b`, `s3[2] = x` → ❌ not equal → `dp[3][0] = false`

```
   ''   a    x    y
'' T    F    F    F
a  T    F    F    F
a  T    F    F    F
b  F    F    F    F
```

#### Fill 1st row: only using `s2`

Compare `s2[j-1]` with `s3[j-1]`

- `s2[0] = a`, `s3[0] = a` → `dp[0][1] = true`
- `s2[1] = x`, `s3[1] = a` → ❌ → `dp[0][2] = false`
- `s2[2] = y`, `s3[2] = x` → ❌ → `dp[0][3] = false`

```
   ''   a    x    y
'' T    T    F    F
a  T    F    F    F
a  T    F    F    F
b  F    F    F    F
```

---

## 🔄 Main DP Filling

Now fill `dp[i][j]` using recurrence:

```js
dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
```

Let’s go step by step:

### Row 1 (s1 = "a")

- `dp[1][1]`:

  - from top: `dp[0][1]=T`, `s1[0]=a`, `s3[1]=a` → ✅
  - → `dp[1][1]=true`

- `dp[1][2]`:

  - from left: `dp[1][1]=T`, `s2[1]=x`, `s3[2]=x` → ✅
  - → `dp[1][2]=true`

- `dp[1][3]`:

  - from left: `dp[1][2]=T`, `s2[2]=y`, `s3[3]=a` → ❌
  - from top: `dp[0][3]=F` → ❌
  - → `dp[1][3]=false`

```
   ''   a    x    y
'' T    T    F    F
a  T    T    T    F
a  T    F    F    F
b  F    F    F    F
```

### Row 2 (s1 = "aa")

- `dp[2][1]`:

  - top: `dp[1][1]=T`, `s1[1]=a`, `s3[2]=x` → ❌
  - left: `dp[2][0]=T`, `s2[0]=a`, `s3[2]=x` → ❌
  - → `dp[2][1]=false`

- `dp[2][2]`:

  - top: `dp[1][2]=T`, `s1[1]=a`, `s3[3]=a` → ✅
  - → `dp[2][2]=true`

- `dp[2][3]`:

  - left: `dp[2][2]=T`, `s2[2]=y`, `s3[4]=b` → ❌
  - top: `dp[1][3]=F` → ❌
  - → `dp[2][3]=false`

```
   ''   a    x    y
'' T    T    F    F
a  T    T    T    F
a  T    F    T    F
b  F    F    F    F
```

### Row 3 (s1 = "aab")

- `dp[3][1]`:

  - top: `dp[2][1]=F`
  - left: `dp[3][0]=F`
  - → `dp[3][1]=false`

- `dp[3][2]`:

  - top: `dp[2][2]=T`, `s1[2]=b`, `s3[4]=b` → ✅
  - → `dp[3][2]=true`

- `dp[3][3]`:

  - left: `dp[3][2]=T`, `s2[2]=y`, `s3[5]=y` → ✅
  - → `dp[3][3]=true`

Final DP Table:

```
   ''   a    x    y
'' T    T    F    F
a  T    T    T    F
a  T    F    T    F
b  F    F    T    T
```

---

## ✅ Final Answer:

Return `dp[3][3] = true`

→ So yes, **`"aaxaby"` can be formed by interleaving `"aab"` and `"axy"`**.

---

Would you like a visualizer script to print this table in console?
