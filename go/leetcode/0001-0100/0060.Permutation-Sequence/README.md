# [60. Permutation Sequence (Hard)](https://leetcode.com/problems/permutation-sequence/)

<p>The set <code>[1, 2, 3, ...,&nbsp;n]</code> contains a total of <code>n!</code> unique permutations.</p>

<p>By listing and labeling all of the permutations in order, we get the following sequence for <code>n = 3</code>:</p>

<ol>
	<li><code>"123"</code></li>
	<li><code>"132"</code></li>
	<li><code>"213"</code></li>
	<li><code>"231"</code></li>
	<li><code>"312"</code></li>
	<li><code>"321"</code></li>
</ol>

<p>Given <code>n</code> and <code>k</code>, return the <code>k<sup>th</sup></code> permutation sequence.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3, k = 3
<strong>Output:</strong> "213"
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> n = 4, k = 9
<strong>Output:</strong> "2314"
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> "123"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 9</code></li>
	<li><code>1 &lt;= k &lt;= n!</code></li>
</ul>

**Related Topics**:  
[Math](https://leetcode.com/tag/math/), [Backtracking](https://leetcode.com/tag/backtracking/)

**Similar Questions**:

- [Next Permutation (Medium)](https://leetcode.com/problems/next-permutation/)
- [Permutations (Medium)](https://leetcode.com/problems/permutations/)

---

Let’s break down **Step 4: Build permutation** in `getPermutation(n, k)` with a clear example and intuitive explanation.

---

### 🎯 Goal

We want the **k-th permutation** of numbers `1` to `n` in **lexicographical order**.

---

### 👇 Step-by-step Example

Let’s say:

```js
(n = 4), (k = 17);
```

All permutations in lexicographical order are:

```
 1: "1234"
 2: "1243"
 3: "1324"
 4: "1342"
 5: "1423"
 6: "1432"
 7: "2134"
 8: "2143"
 9: "2314"
10: "2341"
11: "2413"
12: "2431"
13: "3124"
14: "3142"
15: "3214"
16: "3241"
17: "3412" ✅
18: "3421"
19: "4123"
20: "4132"
21: "4213"
22: "4231"
23: "4312"
24: "4321"
```

We want `"3412"`.

---

### 🧠 Logic Behind It

Let’s prepare:

- Numbers: `nums = [1, 2, 3, 4]`
- Factorials: `[1, 1, 2, 6, 24]` (we use 1-based: `factorials[i] = i!`)
- Convert `k` to 0-indexed: `k = 16`

Now go **digit by digit** from left to right:

---

#### 1st digit (position 0):

- There are **(n - 1)! = 3! = 6** permutations for each number in the first position.
- `index = Math.floor(k / 6) = Math.floor(16 / 6) = 2`
- Pick `nums[2] = 3`
- `result = "3"`
- Remove 3 → `nums = [1, 2, 4]`
- Update `k = 16 % 6 = 4`

---

#### 2nd digit (position 1):

- `(n - 2)! = 2! = 2`
- `index = Math.floor(4 / 2) = 2`
- Pick `nums[2] = 4`
- `result = "34"`
- Remove 4 → `nums = [1, 2]`
- Update `k = 4 % 2 = 0`

---

#### 3rd digit (position 2):

- `(n - 3)! = 1! = 1`
- `index = Math.floor(0 / 1) = 0`
- Pick `nums[0] = 1`
- `result = "341"`
- Remove 1 → `nums = [2]`
- `k = 0`

---

#### 4th digit (position 3):

- Only one number left: 2
- `result = "3412"`

✅ Done!

---

### 🔁 Summary of Step 4:

At each digit position:

1. Use factorials to determine **how many permutations** each fixed digit generates.
2. Use `k` to pick the correct index from `nums`.
3. Remove that digit from `nums`.
4. Update `k` using modulus to continue building.

---

Let me know if you'd like a visual diagram or walk-through for another example.

---

Great question! Let's zoom in on **why `factorials[i]` is used in Step 4** of solving **Leetcode 60. Permutation Sequence**.

---

### 🎯 The Problem Again

You are given:

- A set of numbers: `1` to `n`
- An integer `k` (1-indexed)

You need to **find the k-th permutation** in **lexicographical order**, **without generating all permutations**.

---

### 🧠 Why Use Factorials?

Because the total number of permutations for `n` numbers is:

```
n! (n factorial)
```

And if you're fixing one digit at a time (left to right), then:

- For the **first digit**, there are `(n-1)!` permutations for each possible number.
- For the **second digit**, there are `(n-2)!` permutations for each remaining number.
- And so on.

So `factorials[i]` tells us:

> "How many permutations are there if we fix the first `n-i` digits, and vary the rest?"

This helps us **directly jump** to the correct digit at each position instead of generating them all.

---

### 🔍 Real Example: `n = 4`, `k = 17`

We want the 17th permutation of `[1, 2, 3, 4]`.

#### Step 0: Precompute

```js
nums = [1, 2, 3, 4]
factorials = [1, 1, 2, 6, 24] // 0! to 4!
k = 17 - 1 = 16 // 0-indexed
```

---

#### Step 1: First Digit (i = 3, factorials\[3] = 6)

Each digit in the **first place** fixes `(3!) = 6` permutations:

```
1__ __ __   → 6 permutations
2__ __ __   → 6 permutations
3__ __ __   → 6 permutations
4__ __ __   → 6 permutations
```

- `index = Math.floor(16 / 6) = 2`
- So the first digit is `nums[2] = 3`

Update:

```js
result = '3'
nums = [1, 2, 4]
k = 16 % 6 = 4
```

---

#### Step 2: Second Digit (i = 2, factorials\[2] = 2)

Each digit here fixes `2! = 2` permutations:

```
31__ __   → 2
32__ __   → 2
34__ __   → 2
```

- `index = Math.floor(4 / 2) = 2`
- So pick `nums[2] = 4`

Update:

```js
result = '34'
nums = [1, 2]
k = 4 % 2 = 0
```

---

#### Step 3: Third Digit (i = 1, factorials\[1] = 1)

Each digit here fixes 1 permutation:

```
341__
342__
```

- `index = Math.floor(0 / 1) = 0`
- Pick `nums[0] = 1`

Update:

```js
result = "341";
nums = [2];
```

---

#### Step 4: Last Digit

Only one number left → `result = '3412'`

---

### 🔁 Summary

`factorials[i]` is used to:

- Know **how many permutations** start with a particular digit at position `i`
- Let us **calculate the index** directly using `k / factorials[i]`
- Then update `k` using `k % factorials[i]` to handle the rest

This avoids generating all permutations. That’s why factorials are **crucial for indexing the k-th one directly**.

---

Would you like a visual diagram to help this click further?
