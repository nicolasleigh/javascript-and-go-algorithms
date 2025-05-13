# [8. String to Integer (atoi) (Medium)](https://leetcode.com/problems/string-to-integer-atoi/)

<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>

<p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p>

<ol>
	<li>Read in and ignore any leading whitespace.</li>
	<li>Check if the next character (if not already at the end of the string) is <code>'-'</code> or <code>'+'</code>. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</li>
	<li>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</li>
	<li>Convert these digits into an integer (i.e. <code>"123" -&gt; 123</code>, <code>"0032" -&gt; 32</code>). If no digits were read, then the integer is <code>0</code>. Change the sign as necessary (from step 2).</li>
	<li>If the integer is out of the 32-bit signed integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then clamp the integer so that it remains in the range. Specifically, integers less than <code>-2<sup>31</sup></code> should be clamped to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup> - 1</code> should be clamped to <code>2<sup>31</sup> - 1</code>.</li>
	<li>Return the integer as the final result.</li>
</ol>

<p><strong>Note:</strong></p>

<ul>
	<li>Only the space character <code>' '</code> is considered a whitespace character.</li>
	<li><strong>Do not ignore</strong> any characters other than the leading whitespace or the rest of the string after the digits.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "42"
<strong>Output:</strong> 42
<strong>Explanation:</strong> The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "<u>42</u>" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-2<sup>31</sup>, 2<sup>31</sup> - 1], the final result is 42.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "   -42"
<strong>Output:</strong> -42
<strong>Explanation:</strong>
Step 1: "<u>   </u>-42" (leading whitespace is read and ignored)
            ^
Step 2: "   <u>-</u>42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -<u>42</u>" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-2<sup>31</sup>, 2<sup>31</sup> - 1], the final result is -42.
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "4193 with words"
<strong>Output:</strong> 4193
<strong>Explanation:</strong>
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "<u>4193</u> with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-2<sup>31</sup>, 2<sup>31</sup> - 1], the final result is 4193.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 200</code></li>
	<li><code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>' '</code>, <code>'+'</code>, <code>'-'</code>, and <code>'.'</code>.</li>
</ul>

**Companies**:  
[Facebook](https://leetcode.com/company/facebook), [Microsoft](https://leetcode.com/company/microsoft), [Amazon](https://leetcode.com/company/amazon), [Bloomberg](https://leetcode.com/company/bloomberg), [Google](https://leetcode.com/company/google), [Goldman Sachs](https://leetcode.com/company/goldman-sachs), [Adobe](https://leetcode.com/company/adobe), [Qualtrics](https://leetcode.com/company/qualtrics)

**Related Topics**:  
[String](https://leetcode.com/tag/string/)

**Similar Questions**:

- [Reverse Integer (Medium)](https://leetcode.com/problems/reverse-integer/)
- [Valid Number (Hard)](https://leetcode.com/problems/valid-number/)
- [Check if Numbers Are Ascending in a Sentence (Easy)](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/)

---

Great question — the **"4. Check for overflow/underflow"** part is key to preventing incorrect results or runtime errors.

Let’s take a closer look at this code:

```js
if (result > Math.floor((2 ** 31 - 1) / 10) || (result === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
  return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
}
```

---

### 🔹 Why is overflow/underflow a problem?

JavaScript can handle very large numbers, but **LeetCode limits the result to 32-bit signed integers**:

- **Minimum**: −2³¹ = **−2147483648**
- **Maximum**: 2³¹ − 1 = **2147483647**

If the result goes **outside this range**, we need to **clamp it** to the min or max.

---

### 🔸 When can this happen?

Since we’re building the number **digit by digit**, it may grow beyond 2147483647 or -2147483648 if we’re not careful. So we **check before adding the next digit**.

---

### 🔹 How the check works

Suppose you're about to do:

```js
result = result * 10 + digit;
```

You must first make sure this operation **won’t overflow**.

---

#### ✅ Step-by-step logic

We are safe **only if**:

```js
result * 10 + digit <= 2147483647   (if positive)
```

Instead of computing `result * 10 + digit` directly (which could already overflow), we reverse the logic:

```js
result <= Math.floor(2147483647 / 10);
```

- `Math.floor(2147483647 / 10)` → **214748364**

If `result` is **greater than 214748364**, then multiplying it by 10 would already go over the limit.

Also, if `result == 214748364`, then the **next digit** must be **≤ 7** (because 214748364 \* 10 + 7 = 2147483647 is OK, but +8 would overflow).

That’s what this part does:

```js
result > 214748364 || (result === 214748364 && digit > 7);
```

So we return:

```js
sign === 1 ? 2147483647 : -2147483648;
```

---

### 🔸 Summary

| Check                                   | Purpose                                                   |
| --------------------------------------- | --------------------------------------------------------- |
| `result > 214748364`                    | Adding another digit will **definitely overflow**         |
| `result === 214748364 && digit > 7`     | We're right at the edge — the digit will push it **over** |
| `sign === 1 ? 2147483647 : -2147483648` | Clamp to the correct 32-bit signed int limit              |

---

Let me know if you want a version with logging or debugging output to better understand it step-by-step!
