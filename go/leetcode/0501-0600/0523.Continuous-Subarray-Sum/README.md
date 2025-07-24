# [523. Continuous Subarray Sum (Medium)](https://leetcode.com/problems/continuous-subarray-sum/)

<p>Given a list of <b>non-negative</b> numbers and a target <b>integer</b> k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of <b>k</b>, that is, sums up to n*k where n is also an <b>integer</b>.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> [23, 2, 4, 6, 7],  k=6
<b>Output:</b> True
<b>Explanation:</b> Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
</pre>

<p><b>Example 2:</b></p>

<pre><b>Input:</b> [23, 2, 6, 4, 7],  k=6
<b>Output:</b> True
<b>Explanation:</b> Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
</pre>

<p>&nbsp;</p>

Constraints:

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= sum(nums[i]) &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>1 &lt;= k &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p><b>Note:</b></p>

<ol>
	<li>The length of the array won't exceed 10,000.</li>
	<li>You may assume the sum of all the numbers is in the range of a signed 32-bit integer.</li>
</ol>

**Related Topics**:  
Array,
Hash Table,
Math,
Prefix Sum

**Similar Questions**:

- [Subarray Sum Equals K (Medium)](https://leetcode.com/problems/subarray-sum-equals-k/)

---

Absolutely! Let's deeply explain **LeetCode 523. Continuous Subarray Sum (Medium)** — including the **intuition**, **mathematical reasoning**, and **code walkthrough**.

---

## ✅ Problem Recap

You're given:

- An array of integers `nums`
- An integer `k`

You must check if there exists **any subarray (of at least 2 elements)** such that the **sum is a multiple of `k`**, i.e.:

```
sum(subarray) % k === 0
```

---

## 🎯 Goal

Return `true` if such a subarray exists; otherwise, return `false`.

---

## 🧠 Key Insight: Use Prefix Sums and Modulo Arithmetic

Let’s define:

- `prefixSum[i]` = sum of elements from index `0` to `i`

Suppose:

```
prefixSum[j] % k === prefixSum[i] % k (with j > i)
```

Then:

```
(prefixSum[j] - prefixSum[i]) % k === 0
→ Subarray (i+1 ... j) has sum divisible by k
```

### Why?

Because:

```
prefixSum[j] - prefixSum[i] = sum of subarray (i+1 ... j)
```

So if their **remainders are the same**, then their **difference is divisible by `k`**.

---

## 💡 Strategy

We can use a `Map` (hash table) to remember:

- the **first time** each `remainder` (modulo `k`) appeared
- map value = index where the remainder occurred

As we iterate:

1. Track `runningSum` as we go
2. Calculate `mod = runningSum % k`
3. If we've **seen this mod before at an earlier index**, check if the subarray length ≥ 2
4. If so → return `true`
5. Otherwise → store this mod and index if it’s new

---

## 🔐 Why Store First Occurrence Only?

Because we want the **longest gap** between occurrences of the same remainder to get a valid subarray of **at least 2 elements**.

---

## 📦 Code Walkthrough

```js
var checkSubarraySum = function (nums, k) {
  const modMap = new Map();
  modMap.set(0, -1); // Special case: subarray from beginning

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k !== 0) {
      sum %= k;
    }

    if (modMap.has(sum)) {
      if (i - modMap.get(sum) > 1) {
        return true;
      }
    } else {
      modMap.set(sum, i); // Store first occurrence
    }
  }
  return false;
};
```

---

## 🧪 Example

```js
(nums = [23, 2, 4, 6, 7]), (k = 6);
```

Prefix sums:

- 23 % 6 = 5 → store 5 at index 0
- 23+2 = 25 → 25 % 6 = 1 → store 1 at index 1
- 23+2+4 = 29 → 29 % 6 = 5 → seen before at index 0

Now:

- `i = 2`, `mod = 5`, previously seen at index 0
- Length = 2 - 0 = 2 ✅ → valid subarray → return true

---

## ⏱ Complexity

- **Time**: O(n)
- **Space**: O(k) (number of remainders stored)

---

## ✅ Summary

- Use prefix sums + modulo trick.
- Equal remainders mean the subarray between them is divisible by `k`.
- HashMap tracks first index for each remainder.

---

Would you like:

- A **visual trace of the map and remainders**?
- A **dry run with a different input**?
- A **Go version** of this solution?

Just say the word!
