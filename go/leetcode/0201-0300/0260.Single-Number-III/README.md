# [260. Single Number III (Medium)](https://leetcode.com/problems/single-number-iii/)

<p>Given an array of numbers <code>nums</code>, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.</p>

<p><strong>Example:</strong></p>

<pre><strong>Input:</strong>  <code>[1,2,1,3,2,5]</code>
<strong>Output:</strong> <code>[3,5]</code></pre>

<p><b>Note</b>:</p>

<ol>
	<li>The order of the result is not important. So in the above example, <code>[5, 3]</code> is also correct.</li>
	<li>Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?</li>
</ol>

**Companies**:  
[Facebook](https://leetcode.com/company/facebook), [Yahoo](https://leetcode.com/company/yahoo)

**Related Topics**:  
[Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)

**Similar Questions**:

- [Single Number (Easy)](https://leetcode.com/problems/single-number/)
- [Single Number II (Medium)](https://leetcode.com/problems/single-number-ii/)

---

Sure! Let's walk through the **step-by-step explanation** of **Leetcode 260. Single Number III** using an example and the XOR-based JavaScript solution.

---

### 🧩 Problem Recap:

You are given an array of integers where **exactly two elements appear only once**, and all the rest appear **exactly twice**.
Find the two elements that appear only once.

---

### 🧪 Example:

```js
nums = [1, 2, 1, 3, 2, 5];
```

Expected output: `[3, 5]` (order doesn't matter)

---

## 🔍 Step-by-Step

---

### **Step 1: XOR all numbers**

```js
let xor = 0;
for (const num of nums) {
  xor ^= num;
}
```

Let’s compute it step-by-step:

```
xor = 0
xor ^= 1 → 1
xor ^= 2 → 1 ^ 2 = 3
xor ^= 1 → 3 ^ 1 = 2
xor ^= 3 → 2 ^ 3 = 1
xor ^= 2 → 1 ^ 2 = 3
xor ^= 5 → 3 ^ 5 = 6
```

So now:

```
xor = 6 = 110 (binary)
```

This result is `3 ^ 5`, because duplicates cancel out.

---

### **Step 2: Find rightmost set bit in xor**

```js
let diffBit = xor & -xor;
```

In our case:

```
xor = 6 = 110
-6 = two's complement of 6 = ~6 + 1 = 0010

xor & -xor = 0110 & 0010 = 0010 = 2
```

So `diffBit = 2`, i.e. bit position 1 (from right) differs between `3` and `5`.

---

### **Step 3: Partition numbers and XOR within groups**

```js
let a = 0,
  b = 0;
for (const num of nums) {
  if ((num & diffBit) === 0) {
    a ^= num;
  } else {
    b ^= num;
  }
}
```

Now group numbers based on whether bit 1 is set:

- `diffBit = 2` (binary `10`)

We iterate:

| num | num & 2                         | Group |
| --- | ------------------------------- | ----- |
| 1   | 01 & 10 = 00 → Group A (`a`)    |       |
| 2   | 10 & 10 = 10 → Group B (`b`)    |       |
| 1   | 01 & 10 = 00 → Group A (`a`)    |       |
| 3   | 11 & 10 = 10 → Group B (`b`)    |       |
| 2   | 10 & 10 = 10 → Group B (`b`)    |       |
| 5   | 101 & 010 = 000 → Group A (`a`) |       |

So:

- Group A = \[1, 1, 5]
- Group B = \[2, 3, 2]

Now XOR within each group:

```
a = 0 ^ 1 ^ 1 ^ 5 = 5
b = 0 ^ 2 ^ 3 ^ 2 = 3
```

---

### ✅ Result:

```js
return [5, 3]; // or [3, 5]
```

These are the two unique numbers.

---

### 🧠 Summary:

- **XOR** the whole array to get `a ^ b`.
- Use a set bit in the XOR result to **split** numbers into two groups.
- **XOR** each group to isolate each unique number.

---

Let me know if you'd like a visual diagram or an animated trace of this process!
