# [69. Sqrt(x) (Easy)](https://leetcode.com/problems/sqrtx/)

<p>Given a non-negative integer <code>x</code>,&nbsp;compute and return <em>the square root of</em> <code>x</code>.</p>

<p>Since the return type&nbsp;is an integer, the decimal digits are <strong>truncated</strong>, and only <strong>the integer part</strong> of the result&nbsp;is returned.</p>

<p><strong>Note:&nbsp;</strong>You are not allowed to use any built-in exponent function or operator, such as <code>pow(x, 0.5)</code> or&nbsp;<code>x ** 0.5</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> x = 4
<strong>Output:</strong> 2
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> x = 8
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

**Companies**:  
[LinkedIn](https://leetcode.com/company/linkedin), [Amazon](https://leetcode.com/company/amazon), [Google](https://leetcode.com/company/google), [Microsoft](https://leetcode.com/company/microsoft), [Apple](https://leetcode.com/company/apple), [Uber](https://leetcode.com/company/uber), [tiktok](https://leetcode.com/company/tiktok)

**Related Topics**:  
[Math](https://leetcode.com/tag/math/), [Binary Search](https://leetcode.com/tag/binary-search/)

**Similar Questions**:

- [Pow(x, n) (Medium)](https://leetcode.com/problems/powx-n/)
- [Valid Perfect Square (Easy)](https://leetcode.com/problems/valid-perfect-square/)

---

Great question! Let's break it down.

This solution is trying to **compute the integer square root** of a non-negative number `x`. That is, it wants to find the **largest integer `n` such that `n * n ≤ x`**.

We use **binary search** to solve it efficiently.

---

## 🔍 Step-by-Step Explanation:

Say you are given `x = 16`.

We know:

- `0 * 0 = 0`
- `1 * 1 = 1`
- `2 * 2 = 4`
- ...
- `4 * 4 = 16`
- `5 * 5 = 25 > 16`

So the integer square root of 16 is **4**, because `4*4 = 16` and `5*5 > 16`.

Now instead of checking all numbers from 0 to 16 one-by-one, we use **binary search** to speed this up.

---

## 🧠 How Binary Search Works Here:

We search for a number `mid` in the range `[0, x]` such that:

- if `mid * mid <= x`, then this `mid` is a **valid answer**, but maybe there’s a **larger valid one**, so we move right: `low = mid`
- if `mid * mid > x`, this `mid` is **too big**, so we move left: `high = mid`

We repeat this until `low` and `high` are next to each other.

---

## ✅ Let's Trace an Example: `x = 10`

- `low = 0`, `high = 11` (we set high = x + 1)
- `mid = 5` → `5 * 5 = 25 > 10` → too big → `high = 5`
- `mid = 2` → `2 * 2 = 4 ≤ 10` → valid → `low = 2`
- `mid = 3` → `3 * 3 = 9 ≤ 10` → valid → `low = 3`
- `mid = 4` → `4 * 4 = 16 > 10` → too big → `high = 4`

Now `low = 3`, `high = 4`, and `low !== high - 1` is no longer true.

### 🔚 Return `low = 3` ✅

That’s the largest integer such that `n * n ≤ 10`.

---

## 💡 Why Use `x + 1` for `high`?

We use `x + 1` so that `low` has a chance to move up to `x` itself if needed (e.g., for `x = 1`, we want to check `mid = 1`).

---

Would you like a **visual animation**, or a **Newton’s method version** (alternative algorithm)?
