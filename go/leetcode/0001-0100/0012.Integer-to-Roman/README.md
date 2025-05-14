# [12. Integer to Roman (Medium)](https://leetcode.com/problems/integer-to-roman/)

<p>Roman numerals are represented by seven different symbols:&nbsp;<code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>

<pre><strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre>

<p>For example,&nbsp;<code>2</code> is written as <code>II</code>&nbsp;in Roman numeral, just two one's added together. <code>12</code> is written as&nbsp;<code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p>

<p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p>

<ul>
	<li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.&nbsp;</li>
	<li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.&nbsp;</li>
	<li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li>
</ul>

<p>Given an integer, convert it to a roman numeral.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> num = 3
<strong>Output:</strong> "III"
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> num = 4
<strong>Output:</strong> "IV"
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> num = 9
<strong>Output:</strong> "IX"
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> num = 58
<strong>Output:</strong> "LVIII"
<strong>Explanation:</strong> L = 50, V = 5, III = 3.
</pre>

<p><strong>Example 5:</strong></p>

<pre><strong>Input:</strong> num = 1994
<strong>Output:</strong> "MCMXCIV"
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num &lt;= 3999</code></li>
</ul>

**Related Topics**:  
[Math](https://leetcode.com/tag/math/), [String](https://leetcode.com/tag/string/)

**Similar Questions**:

- [Roman to Integer (Easy)](https://leetcode.com/problems/roman-to-integer/)
- [Integer to English Words (Hard)](https://leetcode.com/problems/integer-to-english-words/)

---

Great question! Let's break down **why** this is considered a **Greedy approach**.

---

### 💡 What is the Greedy approach?

A **greedy algorithm** makes the **locally optimal choice at each step**, hoping that these local choices will lead to a globally optimal solution.

In the context of **"Integer to Roman"**, the goal is to **construct the Roman numeral representation** of a given integer using the **fewest number of symbols** in the **correct order** (from largest to smallest).

---

### ✅ Why this is Greedy:

In the solution:

```javascript
const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
```

At each step of the loop:

```javascript
while (num > 0) {
  while (values[i] > num) {
    i++;
  }
  num -= values[i];
  res += symbols[i];
}
```

You're always choosing the **largest Roman value** (like 1000 = "M", 900 = "CM", etc.) that **does not exceed the current number**. This is the greedy step — always subtract the **largest possible value** you can.

---

### 🔁 Example: `num = 1994`

Let’s trace it step-by-step:

1. `1994 >= 1000`, so subtract 1000 → `"M"`
2. Remaining `994 >= 900`, so subtract 900 → `"CM"`
3. Remaining `94 >= 90`, so subtract 90 → `"XC"`
4. Remaining `4 >= 4`, so subtract 4 → `"IV"`

**Final Roman numeral: `"MCMXCIV"`**

At each step, you **greedily chose the largest value** possible. You didn’t try to "look ahead" or backtrack. You simply picked what was best *at the moment* — and that got you to the correct answer.

---

### 🧠 Why Greedy works here:

* The Roman numeral system is **built hierarchically**, where certain combinations (like 900 = CM) are preferred over repeating smaller symbols (e.g., not "DCCCC").
* The greedy choice always reduces the number optimally and correctly because of the predefined hierarchy of values and subtractive notation (like IV, IX, etc.).

---

Let me know if you'd like to compare this to a non-greedy or recursive version!
