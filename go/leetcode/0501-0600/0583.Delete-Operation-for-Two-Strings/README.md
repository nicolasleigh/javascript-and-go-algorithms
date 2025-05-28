# [583. Delete Operation for Two Strings (Medium)](https://leetcode.com/problems/delete-operation-for-two-strings/)

<p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of <strong>steps</strong> required to make</em> <code>word1</code> <em>and</em> <code>word2</code> <em>the same</em>.</p>

<p>In one <strong>step</strong>, you can delete exactly one character in either string.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> word1 = "sea", word2 = "eat"
<strong>Output:</strong> 2
<strong>Explanation:</strong> You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> word1 = "leetcode", word2 = "etco"
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word1.length, word2.length &lt;= 500</code></li>
	<li><code>word1</code> and <code>word2</code> consist of only lowercase English letters.</li>
</ul>

**Related Topics**:  
[String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

**Similar Questions**:

- [Edit Distance (Hard)](https://leetcode.com/problems/edit-distance/)
- [Minimum ASCII Delete Sum for Two Strings (Medium)](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
- [Longest Common Subsequence (Medium)](https://leetcode.com/problems/longest-common-subsequence/)

---

Sure! Let's go deeper into the **DP table** part — how we build it and what each cell means — using a clear example.

---

## 🧠 What is a DP Table?

In this problem, we use **Dynamic Programming** to compute the **Longest Common Subsequence (LCS)** between two strings `word1` and `word2`.

We create a 2D array `dp` where:

```
dp[i][j] = length of LCS between word1[0..i-1] and word2[0..j-1]
```

This means:

- `dp[0][0]` = LCS of two empty strings = 0
- `dp[2][3]` = LCS of `word1[0..1]` and `word2[0..2]`

---

## 🧪 Example: `word1 = "sea"`, `word2 = "eat"`

Let’s create the table step-by-step.

### Step 1: Setup

We'll initialize a `4 x 4` table (because `"sea"` has length 3 and `"eat"` has length 3, and we add +1 for the base case of empty strings).

```
      ""   e   a   t
   +-----------------
"" |  0 | 0 | 0 | 0 |
s  |  0 |   |   |   |
e  |  0 |   |   |   |
a  |  0 |   |   |   |
```

---

### Step 2: Fill in the table using these rules:

```js
if (word1[i - 1] === word2[j - 1]) {
  dp[i][j] = 1 + dp[i - 1][j - 1];
} else {
  dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
}
```

Let’s go row-by-row:

---

#### Row 1 (s vs "e", "a", "t")

Compare `'s'` with each character of `word2`:

| Compare | Match? | dp\[1]\[j] value |
| ------- | ------ | ---------------- |
| s vs e  | ❌ No  | max(0, 0) = 0    |
| s vs a  | ❌ No  | max(0, 0) = 0    |
| s vs t  | ❌ No  | max(0, 0) = 0    |

```
      ""   e   a   t
   +-----------------
"" |  0 | 0 | 0 | 0 |
s  |  0 | 0 | 0 | 0 |
e  |  0 |   |   |   |
a  |  0 |   |   |   |
```

---

#### Row 2 (e vs "e", "a", "t")

Compare `'e'` with each character of `word2`:

| Compare | Match? | dp\[2]\[j] value   |
| ------- | ------ | ------------------ |
| e vs e  | ✅ Yes | 1 + dp\[1]\[0] = 1 |
| e vs a  | ❌ No  | max(1, 0) = 1      |
| e vs t  | ❌ No  | max(1, 0) = 1      |

```
      ""   e   a   t
   +-----------------
"" |  0 | 0 | 0 | 0 |
s  |  0 | 0 | 0 | 0 |
e  |  0 | 1 | 1 | 1 |
a  |  0 |   |   |   |
```

---

#### Row 3 (a vs "e", "a", "t")

Compare `'a'` with each character of `word2`:

| Compare | Match? | dp\[3]\[j] value   |
| ------- | ------ | ------------------ |
| a vs e  | ❌ No  | max(1, 0) = 1      |
| a vs a  | ✅ Yes | 1 + dp\[2]\[1] = 2 |
| a vs t  | ❌ No  | max(2, 1) = 2      |

```
      ""   e   a   t
   +-----------------
"" |  0 | 0 | 0 | 0 |
s  |  0 | 0 | 0 | 0 |
e  |  0 | 1 | 1 | 1 |
a  |  0 | 1 | 2 | 2 |
```

---

### 🎯 Final Result:

- `dp[3][3] = 2` → LCS length between `"sea"` and `"eat"` is 2 → ("e" and "a")

### 🧮 Then:

```js
min deletions = (3 - 2) + (3 - 2) = 2
```

---

## 🔁 Why This Works

Each cell `dp[i][j]` represents the **best LCS so far** using up to `i` characters of `word1` and `j` characters of `word2`.

You **build up** to the full answer by comparing characters step by step, just like solving a puzzle from top-left to bottom-right.

---

Let me know if you'd like a **visual animation**, or if you want to try building a DP table for a new pair of strings!
