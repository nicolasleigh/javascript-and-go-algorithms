# [456. 132 Pattern (Medium)](https://leetcode.com/problems/132-pattern)

<p>Given an array of <code>n</code> integers <code>nums</code>, a <strong>132 pattern</strong> is a subsequence of three integers <code>nums[i]</code>, <code>nums[j]</code> and <code>nums[k]</code> such that <code>i &lt; j &lt; k</code> and <code>nums[i] &lt; nums[k] &lt; nums[j]</code>.</p>
<p>Return <code>true</code><em> if there is a <strong>132 pattern</strong> in </em><code>nums</code><em>, otherwise, return </em><code>false</code><em>.</em></p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no 132 pattern in the sequence.
</pre>
<p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,1,4,2]
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a 132 pattern in the sequence: [1, 4, 2].
</pre>
<p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [-1,3,2,0]
<strong>Output:</strong> true
<strong>Explanation:</strong> There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Apple](https://leetcode.com/company/apple), [Microsoft](https://leetcode.com/company/microsoft)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Binary Search](https://leetcode.com/tag/binary-search/), [Stack](https://leetcode.com/tag/stack/), [Monotonic Stack](https://leetcode.com/tag/monotonic-stack/), [Ordered Set](https://leetcode.com/tag/ordered-set/)

---

Absolutely! Let’s break down the **132 pattern** detection algorithm in **more detail** so you can deeply understand how and why it works.

---

## ✅ Goal Recap

We want to find three numbers `nums[i]`, `nums[j]`, `nums[k]` such that:

- `i < j < k`
- `nums[i] < nums[k] < nums[j]`

That is the 132 pattern:

```
     i     k     j
nums[i] < nums[k] < nums[j]
```

---

## ✅ Key Insight

Let’s fix `nums[j]` as the **middle number** in the pattern.
Then we’re looking for:

- Some `nums[k]` on the **right** of `j` that is **less than** `nums[j]`
- Some `nums[i]` on the **left** of `j` that is **less than** `nums[k]`

So we reverse our thinking:

- **Fix the middle first (nums\[j])**, and try to find a smaller value (nums\[k]) after it, and an even smaller one (nums\[i]) before it.

But doing this naïvely in 3 nested loops is **O(n³)** — far too slow.

---

## ✅ Greedy + Stack Solution (O(n))

Instead, we flip the order:

> **Traverse from right to left**, maintaining potential `nums[k]` values using a **stack**.

### Why Right to Left?

Because:

- We can track potential `nums[k]` (the "2" in the 132) using a stack.
- We look for `nums[i] < nums[k]` as we move left.
- `nums[j]` is implicitly `nums[i]` when we push it into the stack — candidates for future "3"s.

---

## ✅ How the Algorithm Works

```javascript
let stack = [];
let third = -Infinity;
```

- `stack`: will keep a **monotonic decreasing stack** (used to track "future nums\[j]")
- `third`: keeps the **current best candidate for nums\[k]** (the "2" in 132)

### Step-by-step

For each number `nums[i]` from right to left:

1. **Check if `nums[i] < third`**
   → If yes, we found a valid `nums[i]`, `nums[k]`, `nums[j]`.

2. **Pop from stack while `nums[i] > stack[stack.length - 1]`**
   → That means we've found a smaller number on the right side that could serve as `nums[k]`.
   → We update `third` to that value.

3. **Push `nums[i]` onto stack**
   → It's a candidate for `nums[j]` (future large number)

---

### Example: `[3, 1, 4, 2]`

We go **right to left**.

Initial:

- stack = \[]
- third = -∞

---

**Step 1: i = 3 (nums\[i] = 2)**

- `2 < -∞`? No
- Stack is empty → push `2`

  - stack = `[2]`

---

**Step 2: i = 2 (nums\[i] = 4)**

- `4 < -∞`? No
- `4 > 2`, pop `2`, update `third = 2`
- push `4`

  - stack = `[4]`

---

**Step 3: i = 1 (nums\[i] = 1)**

- `1 < third (2)` → YES!
  ✅ Found 132 pattern: `1 (i) < 2 (k) < 4 (j)`

---

## ✅ Final Notes

- `third` tracks the best `nums[k]` candidate
- The stack helps us manage possible `nums[j]` values
- We loop from **right to left** to ensure proper index order (`i < j < k`)

---

Let me know if you'd like a **visual diagram**, **Go version**, or **brute-force O(n³)** or **O(n²)** explanation for contrast!
