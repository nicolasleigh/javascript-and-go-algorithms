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

---

Great! Let's go over **two's complement** step-by-step. This is a fundamental concept in computer science for representing **negative integers in binary**.

---

## 🧠 What is Two’s Complement?

**Two's complement** is the most common way computers represent **signed integers** (i.e., both positive and negative numbers) using binary.

### Key Ideas:

- The **most significant bit (MSB)** indicates the **sign**:

  - `0` = positive
  - `1` = negative

- A negative number is stored as the **two’s complement** of its absolute value.
- It allows **addition, subtraction, and comparison** to work **identically** for both positive and negative numbers — no special case handling is needed.

---

## 🧮 How to Compute Two’s Complement (for a negative number)

Say you want to represent `-x` in 8-bit binary:

### Steps:

1. Write the binary representation of **positive x**.
2. **Invert all bits** (0 becomes 1, 1 becomes 0).
3. **Add 1** to the inverted result.

---

### Example: Represent `-5` in 8-bit binary

#### Step 1: `+5` in binary (8-bit)

```
00000101
```

#### Step 2: Invert bits

```
11111010
```

#### Step 3: Add 1

```
11111010
+       1
--------
11111011  ← This is two’s complement of 5 = -5
```

✅ So, `-5` in 8-bit two’s complement is:

```
11111011
```

---

## 🔁 Let’s Convert It Back to Decimal

How do we know `11111011` is really `-5`?

### Steps:

1. Since MSB is `1`, we know it’s negative.
2. Invert bits: `00000100`
3. Add 1: `00000101` → that’s `5`
4. Result: `-5`

---

## ✅ Advantages of Two’s Complement

| Feature                                | Why it matters                           |
| -------------------------------------- | ---------------------------------------- |
| Only one zero (`0000...0000`)          | Unlike sign-magnitude (which has +0, -0) |
| No need for separate subtraction logic | Can use regular addition logic           |
| Easy to compare signed numbers         | Because binary order still works         |

---

## 📊 Range of Values

For **n-bit** two’s complement, the range is:

```
−2ⁿ⁻¹  to  2ⁿ⁻¹ − 1
```

### Example: 8-bit

| Type | Value |
| ---- | ----- |
| Min  | -128  |
| Max  | +127  |

---

## 🧪 Quick Practice

| Decimal | 8-bit Two's Complement |
| ------- | ---------------------- |
| 5       | `00000101`             |
| -5      | `11111011`             |
| 1       | `00000001`             |
| -1      | `11111111`             |
| -128    | `10000000`             |

---

## ✏️ Summary

- Two’s complement is a binary encoding for **signed integers**
- It makes **binary arithmetic easier and more uniform**
- To get `-x` in binary:

  - Invert bits of `x`
  - Add 1

Let me know if you want a Go/JavaScript code snippet to compute it manually or visualize the bit flips!

---

Excellent and **very insightful question**! You're touching on one of the **core concepts in binary representation**: the **same binary sequence can represent different values** depending on **how you interpret it**.

---

## 🔍 The Key: Interpretation Depends on Context (Signed vs. Unsigned)

The binary number:

```
11111011
```

can represent **two different values**, depending on whether you treat it as:

1. **Unsigned integer** → interpret all bits as magnitude
2. **Signed integer (two’s complement)** → most significant bit (MSB) is the **sign bit**

---

## 🧾 Interpretation as Unsigned Integer

Treat all 8 bits as **non-negative magnitude**:

```
11111011 = 1×128 + 1×64 + 1×32 + 1×16 + 1×8 + 0×4 + 1×2 + 1×1 = 251
```

✅ So **as an unsigned 8-bit integer**, `11111011` = **251**

---

## 🧾 Interpretation as Signed Integer (Two's Complement)

In **two’s complement**, the leftmost bit (MSB) is the **sign bit**:

- If MSB is `0`, the number is **non-negative**.
- If MSB is `1`, the number is **negative**, and you need to take the **two’s complement** to get its magnitude.

### Let's decode `11111011` as two’s complement:

#### Step 1: MSB is `1` → it's negative

#### Step 2: Invert bits

```
11111011 → 00000100
```

#### Step 3: Add 1

```
00000100 + 1 = 00000101 = 5
```

#### Step 4: So the value is **-5**

✅ So **as a signed 8-bit integer (two's complement)**, `11111011` = **-5**

---

## 💡 Summary

| Interpretation Type     | Binary     | Value |
| ----------------------- | ---------- | ----- |
| Unsigned (0–255)        | `11111011` | 251   |
| Signed Two’s Complement | `11111011` | -5    |

---

## 📦 How Does a Computer Know Which One to Use?

> **It doesn't — it's up to the program and data type.**

- The **exact same bits** can mean different things depending on the **context** (e.g., variable type).
- In C/C++/Go/etc., whether `11111011` means `251` or `-5` depends on the variable type:

  - `uint8` → 251
  - `int8` → -5

---

## ✅ Visual Summary

```
Binary:       11111011
Unsigned:     251
Two’s Comp:   -5
```

🧠 Always ask: “**What kind of number is this — signed or unsigned?**”

Let me know if you want to explore more bit tricks or want a visualization tool!

---

Great observation! You're asking why this line:

```js
num = (1 << 32) + num;
```

does **not work as expected in JavaScript**, but **does** work in Go.

Let’s break this down carefully.

---

## ✅ Summary

| Language       | `(1 << 32)` Result |
| -------------- | ------------------ |
| **JavaScript** | `0`                |
| **Go**         | `4294967296`       |

➡️ That's why the behavior is different.

---

## 🔧 Why JavaScript `(1 << 32)` Gives `0`

In JavaScript, **bitwise operators** (like `<<`, `>>`, `&`, `|`, `^`) operate on **32-bit signed integers** internally.

### 🔸 This means:

* When you do `1 << 32`, JavaScript **truncates the shift amount to the lower 5 bits**.
* So `32` becomes `32 & 0b11111 = 0`.
* Therefore:

  ```js
  1 << 32  → 1 << 0  → 1
  1 << 33  → 1 << 1  → 2
  1 << 34  → 1 << 2  → 4
  ...
  1 << 63  → 1 << 31 → -2147483648 (signed overflow)
  ```
* But strangely enough, when `n == 32`, it's the same as shifting by 0!

❌ So `(1 << 32)` is **not** `4294967296` in JS — it’s actually `1`.

---

### ✅ What to use instead in JavaScript:

```js
2 ** 32  // correct: 4294967296
```

This works because `**` is a **numeric operator**, not a bitwise one.

So in your code:

```js
if (num < 0) {
  num += 2 ** 32; // ✅ works properly
}
```

That line ensures that a **negative 32-bit signed integer** becomes its **unsigned equivalent** (e.g., `-1 + 2^32 = 4294967295` → `0xffffffff` in hex).

---

## ✅ Why Go Works as Expected

In **Go**, bit shifting is done on **integers of arbitrary width**, and the language treats shifting more intuitively.

```go
fmt.Println(1 << 32) // 4294967296
```

Because `1` is promoted to `int64` or `uint64` if necessary, and the result is a **64-bit number**, so it works fine.

---

## 🧪 JS Console Check

```js
console.log(1 << 32);  // Output: 1
console.log(2 ** 32);  // Output: 4294967296
```

✅ Confirmed.

---

## 💡 Final Recommendation

> ❗ **Never use `<<` to shift 32 or more bits in JavaScript** — the result will be wrong due to truncation.

Always use:

```js
2 ** 32
```

to represent `4294967296` (which is `1 << 32` in languages like Go, C, or Python).

---

Let me know if you'd like a Go vs JavaScript comparison table for bitwise operations!
