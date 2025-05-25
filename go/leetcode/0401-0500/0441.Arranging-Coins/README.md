# [441. Arranging Coins (Easy)](https://leetcode.com/problems/arranging-coins/)

<p>You have <code>n</code> coins and you want to build a staircase with these coins. The staircase consists of <code>k</code> rows where the <code>i<sup>th</sup></code> row has exactly <code>i</code> coins. The last row of the staircase <strong>may be</strong> incomplete.</p>

<p>Given the integer <code>n</code>, return <em>the number of <strong>complete rows</strong> of the staircase you will build</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg" style="width: 253px; height: 253px;">
<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Because the 3<sup>rd</sup> row is incomplete, we return 2.
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg" style="width: 333px; height: 333px;">
<pre><strong>Input:</strong> n = 8
<strong>Output:</strong> 3
<strong>Explanation:</strong> Because the 4<sup>th</sup> row is incomplete, we return 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

**Companies**:  
[Salesforce](https://leetcode.com/company/salesforce)

**Related Topics**:  
[Math](https://leetcode.com/tag/math/), [Binary Search](https://leetcode.com/tag/binary-search/)

---

Sure! Let’s break down the **Binary Search** version of the solution for **LeetCode 441: Arranging Coins**.

---

## 🧩 Problem Summary

You have `n` coins and want to build a staircase like this:

```
Row 1: 1 coin
Row 2: 2 coins
Row 3: 3 coins
...
Row k: k coins
```

You can only build a full row if you have enough coins.

### Goal:

Find the **maximum `k`** such that:

$$
1 + 2 + 3 + ... + k = \frac{k(k + 1)}{2} \leq n
$$

---

## 🧠 Why Binary Search?

We're essentially trying to find the **largest `k`** such that:

$$
\frac{k(k + 1)}{2} \leq n
$$

Instead of checking `k` from `1` up to `n` linearly, we can **binary search** the value of `k` between `0` and `n` to find the maximum value satisfying this condition.

---

## ✅ JavaScript Code Again

```javascript
var arrangeCoins = function (n) {
  let left = 0,
    right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const total = (mid * (mid + 1)) / 2;

    if (total === n) {
      return mid; // perfect match
    } else if (total < n) {
      left = mid + 1; // try a bigger k
    } else {
      right = mid - 1; // try a smaller k
    }
  }

  return right; // right will be the largest k such that total ≤ n
};
```

---

## 🔍 Step-by-Step Example

Let’s walk through an example:
**n = 8**

We’re looking for the largest `k` such that:

$$
\frac{k(k + 1)}{2} \leq 8
$$

Binary search range: `left = 0`, `right = 8`

1. `mid = 4`
   → total = 4×5/2 = **10** → too big → move `right = 3`

2. `mid = 1`
   → total = 1×2/2 = **1** → too small → move `left = 2`

3. `mid = 2`
   → total = 2×3/2 = **3** → still too small → move `left = 3`

4. `mid = 3`
   → total = 3×4/2 = **6** → still < 8 → move `left = 4`

Now `left = 4`, `right = 3` → loop ends

**Answer = `right = 3`**
Because we can form 3 full rows with 1+2+3 = 6 coins.

---

## ⏱ Time and Space Complexity

- **Time:** O(log n) — standard binary search
- **Space:** O(1)

---

Let me know if you'd like a diagram or animation-style explanation!
