# [164. Maximum Gap (Medium)](https://leetcode.com/problems/maximum-gap/)

<p>Given an integer array <code>nums</code>, return <em>the maximum difference between two successive elements in its sorted form</em>. If the array contains less than two elements, return <code>0</code>.</p>

<p>You must write an algorithm that runs in linear time and uses linear extra space.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,6,9,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [10]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The array contains less than 2 elements, therefore return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon)

**Related Topics**:  
[Sort](https://leetcode.com/tag/sort/)

---

You're not alone—**Leetcode 164. Maximum Gap** is conceptually tricky because the optimal solution avoids sorting the whole array and instead uses a mathematical insight with **buckets and the Pigeonhole Principle**.

Let me break it down for you in plain terms:

---

## 🧠 Problem Summary:

Given an array `nums`, you want to **find the largest difference between two adjacent numbers** in the **sorted version** of that array — but without sorting it directly in `O(n log n)` time.

---

## ✅ Key Idea: Pigeonhole Principle

If we know:

- The minimum is `minVal`
- The maximum is `maxVal`
- There are `n` elements

Then the **minimum possible maximum gap** between adjacent elements in the sorted array is:

```js
gap = Math.ceil((maxVal - minVal) / (n - 1));
```

If every number is evenly spaced (e.g. `[1, 4, 7, 10]`), this `gap` would be uniform. But **in real inputs**, some gaps will be **larger** than average.

> So, we look for the largest **inter-bucket** gap instead of sorting.

---

## 🪣 Step-by-Step with Buckets:

### Step 1: Create `n-1` buckets

Each bucket represents a value **range** of at least `gap`.
Each bucket stores:

- the **min value** seen in that bucket
- the **max value** seen in that bucket

### Step 2: Place numbers in buckets

We use:

```js
bucketIndex = Math.floor((num - minVal) / gap);
```

Edge case: If `num == maxVal`, place it in the last bucket manually (to avoid `index out of range`).

We **don't sort values inside buckets** — we only care about **min and max** in each bucket.

### Step 3: Find the max adjacent gap

Loop through buckets. For every **non-empty bucket**, compute:

```js
gap = currentBucket.min - previousBucket.max;
```

Track the largest one.

---

## 🧪 Example: `nums = [3, 6, 9, 1]`

- min = 1, max = 9, n = 4
- gap = ceil((9 - 1) / (4 - 1)) = ceil(8 / 3) = **3**
- Buckets:

  - Bucket 0: range \[1, 4)
  - Bucket 1: range \[4, 7)
  - Bucket 2: range \[7, 10)

Place numbers:

- 1 → Bucket 0 (min=1, max=1)
- 3 → Bucket 0 (min=1, max=3)
- 6 → Bucket 1 (min=6, max=6)
- 9 → Bucket 2 (manually put here, min=9, max=9)

Now calculate:

- Bucket 0 max = 3, Bucket 1 min = 6 → gap = 6 - 3 = 3
- Bucket 1 max = 6, Bucket 2 min = 9 → gap = 9 - 6 = 3

Answer: **3**

---

## ✅ Why This Is Better than Sorting?

- Sorting takes `O(n log n)`
- Bucket solution runs in **O(n)**

---

If you want, I can write a **visual version** using logs to help you trace through it with a real input — just say the word!
