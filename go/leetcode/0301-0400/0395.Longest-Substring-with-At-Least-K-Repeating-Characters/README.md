# [395. Longest Substring with At Least K Repeating Characters (Medium)](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)

<p>Given a string <code>s</code> and an integer <code>k</code>, return <em>the length of the longest substring of</em> <code>s</code> <em>such that the frequency of each character in this substring is greater than or equal to</em> <code>k</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "aaabb", k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest substring is "aaa", as 'a' is repeated 3 times.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "ababbc", k = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

**Related Topics**:  
[Divide and Conquer](https://leetcode.com/tag/divide-and-conquer/), [Recursion](https://leetcode.com/tag/recursion/), [Sliding Window](https://leetcode.com/tag/sliding-window/)

---

Absolutely! Let’s walk through the **Divide and Conquer** approach to LeetCode 395 – **Longest Substring with At Least K Repeating Characters** in more depth.

---

## 🔍 Problem Recap

We want to find the **length of the longest substring** in which **every character appears at least `k` times**.

Example:

```txt
s = "ababbc", k = 2
```

In this string:

- 'a' appears 2 times ✅
- 'b' appears 3 times ✅
- 'c' appears 1 time ❌ (invalid)

So we cannot include 'c'. We split at 'c' and check both sides:

- `"ababb"` → valid
- `""` → empty

So the answer is `5`.

---

## 🧠 Divide and Conquer Strategy

### Key Idea

If a character occurs **less than k times**, then **it can’t be part of any valid substring**, because **every character in a valid substring must appear at least k times**.

So we can:

1. **Find such invalid characters.**
2. **Split the string at these characters.**
3. **Recursively apply the logic on each split part.**

### Step-by-Step

Let’s take `s = "ababbc", k = 2`:

#### Step 1: Count Frequencies

```js
a: 2;
b: 3;
c: 1;
```

#### Step 2: Find first invalid character

- 'c' appears only 1 time (< k)
- Split at 'c' → `"ababb"` and `""`

#### Step 3: Recurse on `"ababb"`

- Count: a=2, b=3 → All ≥ 2 ✅
- So return length = 5

---

## 🔄 Code Walkthrough

```js
var longestSubstring = function(s, k) {
  if (s.length === 0 || k > s.length) return 0;
```

- If string is empty or `k` is larger than string length → no valid substring.

```js
const count = {};
for (let ch of s) {
  count[ch] = (count[ch] || 0) + 1;
}
```

- Count the frequency of each character.

```js
for (let i = 0; i < s.length; i++) {
  if (count[s[i]] < k) {
    // Found a character that is invalid
    const left = longestSubstring(s.slice(0, i), k);
    const right = longestSubstring(s.slice(i + 1), k);
    return Math.max(left, right);
  }
}
```

- If any character appears less than `k`:

  - Split the string and recurse on both halves.
  - Return the maximum valid length from both parts.

```js
return s.length;
```

- If all characters are valid (≥ `k`), return the full string length.

---

## 🧠 Complexity Recap

### Time Complexity

- Worst-case: **O(n²)** if you split at every character.

### Space Complexity

- **O(n)** for recursion and substring operations.

---

## ✅ Summary

| Concept                 | Explanation                                              |
| ----------------------- | -------------------------------------------------------- |
| Why split at bad chars? | Because those characters can’t be in any valid result.   |
| Why use recursion?      | Each split is treated independently to find valid parts. |
| When to stop?           | When all characters in a substring have counts ≥ `k`.    |

---

Let me know if you’d like:

- The **Sliding Window** optimized solution (better performance)
- The same logic implemented in **Go** or **Python**
- Or a **visualized dry run** for more clarity
