# [516. Longest Palindromic Subsequence (Medium)](https://leetcode.com/problems/longest-palindromic-subsequence/)

<p>Given a string s, find the longest palindromic subsequence's length in s.</p>

<p>A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.</p>

<p><b>Example 1:</b><br>
Input:</p>

<pre>"bbbab"
</pre>

Output:

<pre>4
</pre>

One possible longest palindromic subsequence is "bbbb".

<p>&nbsp;</p>

<p><b>Example 2:</b><br>
Input:</p>

<pre>"cbbd"
</pre>

Output:

<pre>2
</pre>

One possible longest palindromic subsequence is "bb".

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>

**Related Topics**:  
[Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

**Similar Questions**:

- [Longest Palindromic Substring (Medium)](https://leetcode.com/problems/longest-palindromic-substring/)
- [Palindromic Substrings (Medium)](https://leetcode.com/problems/palindromic-substrings/)
- [Count Different Palindromic Subsequences (Hard)](https://leetcode.com/problems/count-different-palindromic-subsequences/)
- [Longest Common Subsequence (Medium)](https://leetcode.com/problems/longest-common-subsequence/)
- [Longest Palindromic Subsequence II (Medium)](https://leetcode.com/problems/longest-palindromic-subsequence-ii/)
- [Maximize Palindrome Length From Subsequences (Hard)](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [LinkedIn](https://leetcode.com/company/linkedin), [Microsoft](https://leetcode.com/company/microsoft), [Facebook](https://leetcode.com/company/facebook)

---

Absolutely! Let’s break down **LeetCode 516. Longest Palindromic Subsequence** in a way that’s **easy to follow**, step-by-step.

---

## 🧠 What is the Problem Really Asking?

You're given a **string** `s`, and you're asked to find the **length of the longest subsequence** that is a **palindrome**.

🔑 **A subsequence** means you can remove some characters (or none), **but you cannot change the order** of the remaining characters.

🔑 **A palindrome** is a sequence that reads the same forward and backward.

---

## 🧪 Example

```text
Input: "bbbab"
Subsequences that are palindromes:
- "bbbb" ✅ (length 4)
- "bbb" ✅ (length 3)
- "bbab" ❌ (not a palindrome)

Output: 4
```

---

## 🧩 Strategy: Use Dynamic Programming

We'll use **Dynamic Programming (DP)** because:

1. We want to solve **overlapping subproblems**.
2. We can build the answer from **smaller subproblems**.

---

## 🧱 Step-by-Step Idea

We define a 2D DP table `dp[i][j]` where:

> `dp[i][j]` = the **length** of the **longest palindromic subsequence** in the substring `s[i...j]` (inclusive)

### Base Case:

If `i == j`, the substring is just one character → always a palindrome of length `1`.

So:

```js
dp[i][i] = 1;
```

---

### Recursive Rule:

For each pair `i < j`, we look at the characters `s[i]` and `s[j]`.

1. If `s[i] === s[j]`:

   - These two characters can be the two ends of a palindrome!
   - So:

     ```
     dp[i][j] = dp[i + 1][j - 1] + 2
     ```

2. If `s[i] !== s[j]`:

   - We can’t use both `i` and `j` together.
   - So take the best of ignoring one of them:

     ```
     dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
     ```

---

### Filling the DP Table

We want to build up from **short substrings** to **longer substrings**.

So we:

- Start with substrings of length 2, then 3, up to `n`
- Always fill from **bottom up**, starting from the back of the string.

---

## 🔁 Example Walkthrough

Let’s walk through `"bbbab"` step-by-step:

```text
Index: 0  1  2  3  4
Chars: b  b  b  a  b
```

Now build the `dp[i][j]` table from the end:

- `dp[0][0] = dp[1][1] = dp[2][2] = dp[3][3] = dp[4][4] = 1`
  (base case: each letter alone)

Now look at length 2 substrings:

- `dp[3][4] = 1` (a ≠ b → max of dp\[4]\[4], dp\[3]\[3])
- `dp[2][3] = 1` (b ≠ a)
- `dp[1][2] = 2` (b == b → dp\[2]\[1] + 2 = 0 + 2 = 2)
- etc...

Eventually:

- `dp[0][4] = 4` → which is the final result.

---

## 📦 Final Output

Return `dp[0][n - 1]` — the longest palindromic subsequence in the **entire string**.

---

## 🧠 Time & Space Complexity

- **Time**: O(n²) — because we fill a 2D table of size `n x n`
- **Space**: O(n²) — to store the `dp` table

---

Would you like:

- A **visual grid** of how the `dp` table looks for an example?
- A **space-optimized version** using only a 1D array?
- A **code walkthrough** step by step?

Let me know!
