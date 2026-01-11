# [72. Edit Distance (Medium)](https://leetcode.com/problems/edit-distance)

<p>Given two words <em>word1</em> and <em>word2</em>, find the minimum number of operations required to convert <em>word1</em> to <em>word2</em>.</p>

<p>You have the following 3 operations permitted on a word:</p>

<ol>
	<li>Insert a character</li>
	<li>Delete a character</li>
	<li>Replace a character</li>
</ol>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> word1 = "horse", word2 = "ros"
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
horse -&gt; rorse (replace 'h' with 'r')
rorse -&gt; rose (remove 'r')
rose -&gt; ros (remove 'e')
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> word1 = "intention", word2 = "execution"
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
intention -&gt; inention (remove 't')
inention -&gt; enention (replace 'i' with 'e')
enention -&gt; exention (replace 'n' with 'x')
exention -&gt; exection (replace 'n' with 'c')
exection -&gt; execution (insert 'u')
</pre>

**Companies**:  
[Google](https://leetcode.com/company/google), [Amazon](https://leetcode.com/company/amazon), [LinkedIn](https://leetcode.com/company/linkedin), [Bloomberg](https://leetcode.com/company/bloomberg), [Microsoft](https://leetcode.com/company/microsoft), [Baidu](https://leetcode.com/company/baidu), [Yahoo](https://leetcode.com/company/yahoo)

**Related Topics**:  
[String](https://leetcode.com/tag/string/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

**Similar Questions**:

- [One Edit Distance (Medium)](https://leetcode.com/problems/one-edit-distance/)
- [Delete Operation for Two Strings (Medium)](https://leetcode.com/problems/delete-operation-for-two-strings/)
- [Minimum ASCII Delete Sum for Two Strings (Medium)](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

---

Great question! Let's break it down intuitively by visualizing what each operation is doing at position `i`, `j` in the `dp[i][j]` matrix.

We are trying to transform `word1[0..i-1]` into `word2[0..j-1]`.

---

### 🔁 Replace: `dp[i - 1][j - 1] + 1`

You're considering **replacing `word1[i-1]` with `word2[j-1]`**.

#### Why `dp[i - 1][j - 1]`?

Because after replacing the last characters, you're left with converting the prefixes `word1[0..i-2]` to `word2[0..j-2]`.

#### Add `+1`?

Yes, because the **replacement itself is 1 operation**.

#### Example:

```text
word1 = "ab"
word2 = "ac"
i = 2, j = 2
word1[i-1] = 'b', word2[j-1] = 'c' → different → replace 'b' with 'c'
So we look at dp[1][1], which is for "a" and "a", and then +1 for the replace.
```

---

### ❌ Delete: `dp[i - 1][j] + 1`

You're considering **deleting `word1[i-1]`**.

#### Why `dp[i - 1][j]`?

After deleting `word1[i-1]`, you're left with converting `word1[0..i-2]` into `word2[0..j-1]`.

#### Add `+1`?

Yes, because the **deletion itself is 1 operation**.

#### Example:

```text
word1 = "abc", word2 = "ab"
i = 3, j = 2
You delete 'c' from "abc" → left with "ab"
So we look at dp[2][2] (for "ab" and "ab") and add 1 for the delete.
```

---

### ➕ Insert: `dp[i][j - 1] + 1`

You're considering **inserting `word2[j-1]` into `word1`**.

#### Why `dp[i][j - 1]`?

You're matching `word1[0..i-1]` to `word2[0..j-2]`, then **insert `word2[j-1]`** to get to `word2[0..j-1]`.

#### Add `+1`?

Yes, because the **insertion is 1 operation**.

#### Example:

```text
word1 = "ab", word2 = "abc"
i = 2, j = 3
You insert 'c' at the end of "ab" → now it's "abc"
So we look at dp[2][2] (for "ab" and "ab") and add 1 for the insert.
```

---

### 💡 Visual Summary

| Operation | What you do                            | Previous State | Why +1               |
| --------- | -------------------------------------- | -------------- | -------------------- |
| Replace   | Replace `word1[i-1]` with `word2[j-1]` | `dp[i-1][j-1]` | Replacement happened |
| Delete    | Delete `word1[i-1]`                    | `dp[i-1][j]`   | One deletion done    |
| Insert    | Insert `word2[j-1]` into `word1`       | `dp[i][j-1]`   | One insertion done   |

---

Would you like to see a step-by-step trace on a specific pair of words to see how the table is filled and these rules apply?
