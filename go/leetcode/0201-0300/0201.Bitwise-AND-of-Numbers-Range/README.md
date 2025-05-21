# [201. Bitwise AND of Numbers Range (Medium)](https://leetcode.com/problems/bitwise-and-of-numbers-range/)

<p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> left = 5, right = 7
<strong>Output:</strong> 4
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> left = 0, right = 0
<strong>Output:</strong> 0
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> left = 1, right = 2147483647
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= left &lt;= right &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon)

**Related Topics**:  
[Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)

---

You're not alone — this solution is elegant but not very intuitive at first. Let me break it down clearly for you, step by step.

---

## 🧠 Problem Understanding

### Leetcode 201: **Bitwise AND of Numbers Range**

Given two integers `left` and `right`, you need to compute the **bitwise AND of all numbers in the range** `[left, right]` inclusive.

---

### 🤯 Why a naïve approach fails?

```js
let result = left;
for (let i = left + 1; i <= right; i++) {
  result &= i;
}
return result;
```

This works but is **too slow** for large ranges like `[1, 2^31 - 1]`.

---

## ✅ The Optimized Logic (Go version you provided)

### Key Insight:

The result of bitwise AND over a range `[left, right]` is the **common prefix of their binary representations**.

#### Why?

Because **at least one number in the range will flip the differing bits to 0** during AND operations.

---

### 🔧 Visual Explanation

Suppose:

```
left  =  26  =>  11010
right =  30  =>  11110
```

From 26 to 30, the binary numbers are:

```
11010
11011
11100
11101
11110
```

If you AND all of them bit by bit, notice that only the **first 3 bits** remain the same across all — the rest vary and become 0.

→ Result: `11000` → `24`

---

### ✅ JavaScript Optimized Version Revisited

```js
function rangeBitwiseAnd(left, right) {
  let count = 0;
  
  // Shift both left and right to the right until they match
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    count++;
  }

  // Shift back to the left to restore the common bits
  return left << count;
}
```

---

### 🔍 Step-by-Step Example

```js
rangeBitwiseAnd(26, 30)
```

#### Binary:

```
26 => 11010
30 => 11110
```

#### Loop:

| Iteration | left | right | count |
| --------- | ---- | ----- | ----- |
| 1         | 1101 | 1111  | 1     |
| 2         | 110  | 111   | 2     |
| 3         | 11   | 11    | 3 ✅   |

Now shift `11` back left by 3 bits → `11000` = `24`

---

### ✅ Final Output: `24`

---

## 🧠 Intuition Summary

> The bitwise AND of a range only keeps the bits that **never change** in any number within the range. This is the **common prefix**.

---

Let me know if you'd like this written out with actual bit masks or visual diagrams!
