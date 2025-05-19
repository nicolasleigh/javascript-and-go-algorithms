# [137. Single Number II (Medium)](https://leetcode.com/problems/single-number-ii)

<p>Given an integer array <code>nums</code> where&nbsp;every element appears <strong>three times</strong> except for one, which appears <strong>exactly once</strong>. <em>Find the single element and return it</em>.</p>

<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,3,2]
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,1,0,1,99]
<strong>Output:</strong> 99
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Each element in <code>nums</code> appears exactly <strong>three times</strong> except for one element which appears <strong>once</strong>.</li>
</ul>

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)

**Similar Questions**:

- [Single Number (Easy)](https://leetcode.com/problems/single-number/)
- [Single Number III (Easy)](https://leetcode.com/problems/single-number-iii/)

## Note

Basically this problem asks us to implement a ternary system that when a digit reaches 3, this digit should be reset to 0.

---

Great question! The bitmasking solution to **Leetcode 137. Single Number II** is elegant but non-trivial. Let’s walk through **how and why it works**.

---

### 🔧 Problem Recap

> Every number appears **three times** except for **one** number that appears **once**. Find that one.

---

### 🧠 Idea

We use **bit-level state tracking** to simulate counting how many times each bit appears — but we do this using **two variables**, `x1` and `x2`.

These two variables **simulate a 2-bit counter** for each bit position:

- When a bit is 0 in both `x1` and `x2` → the bit has appeared 0 times (mod 3)
- When 1 in `x1` and 0 in `x2` → appeared once
- When 0 in `x1` and 1 in `x2` → appeared twice
- When 1 in both → appeared 3 times → reset to 0

### 🔢 Binary States (Modulo 3 Simulation)

| Appearances | x2  | x1  |                        |
| ----------- | --- | --- | ---------------------- |
| 0           | 0   | 0   |                        |
| 1           | 0   | 1   |                        |
| 2           | 1   | 0   |                        |
| 3           | 0   | 0   | ← wrapped back (mod 3) |

---

### ✅ Code Breakdown

```js
let x1 = 0,
  x2 = 0;

for (let i of nums) {
  // First, update x2 with any bits that are already in x1 and now appear again
  x2 ^= x1 & i;

  // Then update x1 with the current number
  x1 ^= i;

  // Mask identifies the bits that appeared 3 times (x1 & x2)
  let mask = ~(x1 & x2);

  // Clear bits in x1 and x2 that have appeared 3 times
  x1 &= mask;
  x2 &= mask;
}
```

---

### 🧪 Example: `[2, 2, 3, 2]`

Let’s walk through:

Initial:

```
x1 = 0
x2 = 0
```

#### i = 2 (binary: 010)

```
x2 = x2 ^ (x1 & i) = 0 ^ (0 & 010) = 0
x1 = x1 ^ i = 0 ^ 010 = 010
mask = ~(x1 & x2) = ~(010 & 000) = 111
x1 &= 111 → 010
x2 &= 111 → 000
```

#### i = 2 (again)

```
x2 = 000 ^ (010 & 010) = 000 ^ 010 = 010
x1 = 010 ^ 010 = 000
mask = ~(000 & 010) = ~(000) = 111
x1 &= 111 → 000
x2 &= 111 → 010
```

#### i = 3 (binary: 011)

```
x2 = 010 ^ (000 & 011) = 010 ^ 000 = 010
x1 = 000 ^ 011 = 011
mask = ~(011 & 010) = ~(010) = 101
x1 &= 101 = 011 & 101 = 001
x2 &= 101 = 010 & 101 = 000
```

So after 3 is processed, x1 = 001 → **that’s the unique number**!

#### i = 2 (last one)

```
x2 = 000 ^ (001 & 010) = 000
x1 = 001 ^ 010 = 011
mask = ~(011 & 000) = ~000 = 111
x1 &= 111 → 011
x2 &= 111 → 000
```

Now `x1 & x2 = 011 & 000 = 000`, but after repeating we eventually clear it back to 0 again.

---

### 🎯 Final Result

After the loop, `x1` holds the **bitmask** of the number that appears **once**, and `x2` holds the one that appeared twice (we don't need it).
So we return `x1`.

---

### 🧪 Why this works

This is a **state machine** for each bit, where:

- Every time a bit appears, it moves forward in the state table
- Once it appears 3 times, it wraps to 0
- Only the bit pattern that appeared once remains in `x1` at the end

---

Would you like a visualization or pseudocode to better cement the concept?
