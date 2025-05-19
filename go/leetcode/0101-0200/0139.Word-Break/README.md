# [139. Word Break (Medium)](https://leetcode.com/problems/word-break)

<p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.</p>
<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "leetcode", wordDict = ["leet","code"]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because "leetcode" can be segmented as "leet code".
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "applepenapple", wordDict = ["apple","pen"]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
</pre>
<p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>1 &lt;= s.length &lt;= 300</code></li>
	<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>
	<li><code>1 &lt;= wordDict[i].length &lt;= 20</code></li>
	<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>
	<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>
</ul>

**Companies**:
[Salesforce](https://leetcode.com/company/salesforce), [Apple](https://leetcode.com/company/apple), [Bloomberg](https://leetcode.com/company/bloomberg)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Trie](https://leetcode.com/tag/trie/), [Memoization](https://leetcode.com/tag/memoization/)

**Similar Questions**:

- [Word Break II (Hard)](https://leetcode.com/problems/word-break-ii/)
- [Extra Characters in a String (Medium)](https://leetcode.com/problems/extra-characters-in-a-string/)

---

This solution to **Leetcode 139. Word Break** uses **Dynamic Programming (DP)**. Let's break it down step by step so you understand the logic clearly.

---

### ❓ Problem:

Given a string `s` and a list of words `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

---

### ✅ Key Idea:

Use a **DP array** to track whether substrings of `s` can be segmented using words from `wordDict`.

---

### 🧠 Step-by-step Explanation:

#### 1. **Initialize the DP array**

```js
let dp = Array(s.length + 1).fill(false);
dp[0] = true;
```

- `dp[i]` means: **can `s[0..i-1]` be segmented using the wordDict?**
- `dp[0] = true` because the empty string can always be segmented.

---

#### 2. **Loop through the string**

```js
for (let i = 1; i <= s.length; i++) {
  for (let j = 0; j < i; j++) {
    if (dp[j] && wordDict.includes(s.substring(j, i))) {
      dp[i] = true;
      break;
    }
  }
}
```

- For every `i` from `1` to `s.length`, you check **all possible substrings `s[j..i-1]`**.

- You check two things:

  1. Is `dp[j]` true? → Can the prefix up to index `j` be broken successfully?
  2. Is `s.substring(j, i)` in the dictionary?

- If both are true, then `dp[i] = true` because you can form `s[0..i-1]` by:

  - Breaking `s[0..j-1]` (which is `dp[j]`)
  - Then appending a valid word `s[j..i-1]` from the dictionary.

---

### 🧪 Example:

```js
s = "leetcode";
wordDict = ["leet", "code"];
```

- `dp[4]` becomes true because `"leet"` is in `wordDict` and `dp[0] = true`
- Then `dp[8]` becomes true because `"code"` is in `wordDict` and `dp[4] = true`

Final answer: `dp[8] = true`

---

### ⚠️ Important Comment in Code:

```js
// Without dp[j]=true constrain, the third case 's="catsandog"' will return true
```

If we don’t check that `dp[j] == true`, we might falsely assume a substring is valid even though earlier parts can't be segmented. So this check ensures **each piece leading up to `i` must also be valid**.

---

### ✅ Time Complexity:

- **O(n² \* k)**
  where `n` is the length of `s`, and `k` is the average length of words in `wordDict` (used in `substring()` and `includes()`).

---

Let me know if you want this rewritten using a `Set` instead of `includes()` for faster lookups (common optimization).
