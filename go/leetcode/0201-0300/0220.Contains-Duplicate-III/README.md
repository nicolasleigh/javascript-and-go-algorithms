# [220. Contains Duplicate III (Hard)](https://leetcode.com/problems/contains-duplicate-iii/)

<p>Given an array of integers, find out whether there are two distinct indices <i>i</i> and <i>j</i> in the array such that the <b>absolute</b> difference between <b>nums[i]</b> and <b>nums[j]</b> is at most <i>t</i> and the <b>absolute</b> difference between <i>i</i> and <i>j</i> is at most <i>k</i>.</p>

<div>
<p><strong>Example 1:</strong></p>

<pre><strong>Input: </strong>nums = <span id="example-input-1-1">[1,2,3,1]</span>, k = <span id="example-input-1-2">3</span>, t = <span id="example-input-1-3">0</span>
<strong>Output: </strong><span id="example-output-1">true</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre><strong>Input: </strong>nums = <span id="example-input-2-1">[1,0,1,1]</span>, k = <span id="example-input-2-2">1</span>, t = <span id="example-input-2-3">2</span>
<strong>Output: </strong><span id="example-output-2">true</span>
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre><strong>Input: </strong>nums = <span id="example-input-3-1">[1,5,9,1,5,9]</span>, k = <span id="example-input-3-2">2</span>, t = <span id="example-input-3-3">3</span>
<strong>Output: </strong><span id="example-output-3">false</span>
</pre>
</div>
</div>
</div>

**Related Topics**:  
[Sort](https://leetcode.com/tag/sort/), [Ordered Map](https://leetcode.com/tag/ordered-map/)

**Similar Questions**:

- [Contains Duplicate (Easy)](https://leetcode.com/problems/contains-duplicate/)
- [Contains Duplicate II (Easy)](https://leetcode.com/problems/contains-duplicate-ii/)

---

Great — let’s break it down clearly and step-by-step.

---

## ✅ What’s the problem asking?

You’re given:

- An array `nums`
- An integer `k`: how close two indices can be (`|i - j| <= k`)
- An integer `t`: how close two values can be (`|nums[i] - nums[j]| <= t`)

Return `true` if you can find **two different indices `i` and `j`** where both of those conditions are true.

---

## 🧠 Example

```js
(nums = [1, 2, 3, 1]), (k = 3), (t = 0);
```

- `nums[0] = 1`, `nums[3] = 1`
- `|0 - 3| = 3 <= k`
- `|1 - 1| = 0 <= t`

✅ So return `true`.

---

## ❌ Brute force (Too slow)

You can compare each number with the next `k` numbers and check if the value difference is ≤ `t`. But that’s **O(n \* k)** time and slow for large input.

---

## ⚡ Optimized idea: Buckets

Let’s speed things up using a **sliding window + hash map + buckets**.

### 🎯 What are buckets?

- Imagine you divide the number line into **buckets** of size `t + 1`.
- Numbers in the **same bucket** are guaranteed to be within `t` distance of each other.

> If two numbers are within `t`, they must either fall into:
>
> - the **same bucket**, or
> - **neighboring buckets** (±1)

---

### 🛠️ The Algorithm (in simple steps)

We loop over `nums`:

1. For each `num`, compute the `bucketId` = `Math.floor(num / (t + 1))`
2. If any of the following is true:

   - There's already a number in the **same bucket** → return `true`
   - There's a number in the **left bucket** and the value difference ≤ `t` → return `true`
   - There's a number in the **right bucket** and the value difference ≤ `t` → return `true`

3. Add current number to its bucket
4. If the window gets bigger than `k`, remove the oldest number (its bucket)

---

### 📦 Visualization

Imagine `nums = [1, 2, 3, 1], k = 3, t = 0`:

- bucketSize = 1
- First 1 goes into bucket 1
- Second 1 also goes into bucket 1 → match found! ✅

---

### ❓ Why `bucketSize = t + 1`?

Because two values `a` and `b` in the same bucket satisfy:

```
|a - b| < t + 1  →  |a - b| <= t
```

So this makes sure the **value constraint is satisfied** when numbers fall into the same bucket.

---

Would you like a visual animation/diagram of this, or a simpler approach (slower but easier to understand)?
