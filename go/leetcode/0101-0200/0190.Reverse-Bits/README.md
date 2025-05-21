# [190. Reverse Bits (Easy)](https://leetcode.com/problems/reverse-bits/)

<p>Reverse bits of a given 32 bits unsigned integer.</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> 00000010100101000001111010011100
<strong>Output:</strong> 00111001011110000010100101000000
<strong>Explanation: </strong>The input binary string <b>00000010100101000001111010011100</b> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <b>00111001011110000010100101000000</b>.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> 11111111111111111111111111111101
<strong>Output:</strong> 10111111111111111111111111111111
<strong>Explanation: </strong>The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ul>
	<li>Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.</li>
	<li>In Java,&nbsp;the compiler represents the signed integers using <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">2's complement notation</a>. Therefore, in <strong>Example 2</strong>&nbsp;above the input represents the signed integer <code>-3</code>&nbsp;and the output represents the signed integer <code>-1073741825</code>.</li>
</ul>

<p>&nbsp;</p>

<p><b>Follow up</b>:</p>

<p>If this function is called many times, how would you optimize it?</p>

**Related Topics**:  
[Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)

**Similar Questions**:

- [Reverse Integer (Easy)](https://leetcode.com/problems/reverse-integer/)
- [Number of 1 Bits (Easy)](https://leetcode.com/problems/number-of-1-bits/)

---

Great question — and it's a subtle but important detail!

### 🧠 Why `result >>> 0` is necessary

In JavaScript, **all numbers are 64-bit floating-point**, but **bitwise operations** only operate on **32-bit signed integers**.

---

### 🔍 Problem Context: LeetCode 190

You're reversing **32 bits**, and the result should be treated as an **unsigned 32-bit integer** (i.e., a number between `0` and `2³² - 1`).

But here's the catch:

- After doing all the bitwise operations (like `result = (result << 1) | (n & 1)`), your final `result` might have its sign bit set.
- That means JavaScript might interpret the 32-bit result as **negative**, since it uses **signed 32-bit** for bitwise results.

---

### ✅ What `>>> 0` Does

```js
result >>> 0;
```

This \*\*forces the result to be interpreted as an **unsigned 32-bit integer**.

- It **shifts 0 bits**, but using the **unsigned shift operator**, which coerces the number into the **unsigned range**.
- It turns a **negative signed int** into its equivalent **positive unsigned int**.

---

### 🧪 Example

```js
let result = -2;
console.log(result); // -2
console.log(result >>> 0); // 4294967294
```

Why?

- `-2` as a 32-bit unsigned int = `0xFFFFFFFE` = `4294967294`.

---

### 🟢 In the context of `reverseBits`:

Without `>>> 0`:

```js
reverseBits(0b00000010100101000001111010011100);
// might return a **negative number**
```

With `>>> 0`:

```js
reverseBits(...) >>> 0
// returns the correct 32-bit unsigned result
```

---

### ✅ Summary

| Expression     | Meaning                                              |
| -------------- | ---------------------------------------------------- |
| `result`       | Possibly a signed 32-bit integer (could be negative) |
| `result >>> 0` | Force result to be an **unsigned** 32-bit integer    |

---

Let me know if you’d like to see how JavaScript internally stores these binary values!
