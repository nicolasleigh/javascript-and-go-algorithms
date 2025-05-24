# [405. Convert a Number to Hexadecimal (Easy)](https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/)

<div><div class="elfjS" data-track-load="description_content"><p>Given a 32-bit integer <code>num</code>, return <em>a string representing its hexadecimal representation</em>. For negative integers, <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">two’s complement</a> method is used.</p>

<p>All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.</p>

<p><strong>Note:&nbsp;</strong>You are not allowed to use any built-in library method to directly solve this problem.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> num = 26
<strong>Output:</strong> "1a"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> num = -1
<strong>Output:</strong> "ffffffff"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= num &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div>

---

Great question! Let's break down:

```js
if (num < 0) {
  num += 2 ** 32; // Same as (1 << 32) + num in Go
}
```

### 🧠 What this does

When `num` is **negative**, we **manually convert it to its 32-bit unsigned representation**.

JavaScript uses **floating point numbers**, and doesn’t distinguish between signed/unsigned integers directly. So to mimic how negative integers are stored in memory (two's complement), we do:

```
num + 2^32
```

This is how negative numbers are represented in memory in most programming languages (like Go or C) using **two’s complement** format.

---

### ✅ Example: `num = -1`

In Go:

```go
(1 << 32) + (-1) = 4294967295
```

In JS:

```js
-1 + 2 ** 32 = 4294967295
```

Which is:

```txt
0xffffffff  // hexadecimal representation
```

So `-1` becomes `0xffffffff` → `"ffffffff"` in hex.

---

### ✅ Why we do this

Hex output expects an **unsigned 32-bit number**, even for negative input. This shift:

```js
num += 2 ** 32;
```

is a **trick to reinterpret a negative number as its 32-bit unsigned equivalent** so that the hex conversion behaves the same as Go or C.

---

Let me know if you'd like a version using bitwise operations instead (`>>> 0` is another trick to do this in JavaScript).
