# [526. Beautiful Arrangement (Medium)](https://leetcode.com/problems/beautiful-arrangement/)

<p>Suppose you have <code>n</code> integers labeled <code>1</code> through <code>n</code>. A permutation of those <code>n</code> integers <code>perm</code> (<strong>1-indexed</strong>) is considered a <strong>beautiful arrangement</strong> if for every <code>i</code> (<code>1 &lt;= i &lt;= n</code>), <strong>either</strong> of the following is true:</p>

<ul>
	<li><code>perm[i]</code> is divisible by <code>i</code>.</li>
	<li><code>i</code> is divisible by <code>perm[i]</code>.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the <strong>number</strong> of the <strong>beautiful arrangements</strong> that you can construct</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<b>Explanation:</b> 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 15</code></li>
</ul>

**Related Topics**:  
[Backtracking](https://leetcode.com/tag/backtracking/), [Depth-first Search](https://leetcode.com/tag/depth-first-search/)

**Similar Questions**:

- [Beautiful Arrangement II (Medium)](https://leetcode.com/problems/beautiful-arrangement-ii/)

---

Absolutely! Let’s walk through the **full explanation** of the solution for LeetCode **526. Beautiful Arrangement**:

---

## ✅ Problem Summary:

You are given an integer `n` (1 ≤ n ≤ 15). You must **count how many permutations** of the numbers `1` to `n` are **beautiful**.

### A permutation is **beautiful** if:

For **every position** `i` in the array (1-indexed), one of these must hold:

- The number at position `i` divides `i` (i.e., `perm[i] % i === 0`)
- OR `i` divides the number at position `i` (i.e., `i % perm[i] === 0`)

---

## 🚀 Solution Strategy: **Backtracking**

We try **all possible permutations** of `1` to `n`, but **prune** the search early if placing a number violates the beautiful condition.

### Let’s explain the code line by line:

```js
var countArrangement = function (n) {
  let count = 0; // Final count of beautiful arrangements
  const used = new Array(n + 1).fill(false); // Tracks which numbers are already used

  function backtrack(pos) {
    if (pos > n) {
      // Base case: all positions filled correctly
      count++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      // Try placing number i at position pos
      if (!used[i] && (i % pos === 0 || pos % i === 0)) {
        used[i] = true; // Mark the number as used
        backtrack(pos + 1); // Recurse to next position
        used[i] = false; // Backtrack: unmark for next try
      }
    }
  }

  backtrack(1); // Start placing at position 1
  return count;
};
```

---

## 🧠 How it works — With Example:

Let’s say `n = 2`. We want to count all **beautiful permutations** of `[1, 2]`.

1. Start with `pos = 1`. Try placing numbers:

   - Try `i = 1`: `1 % 1 == 0` ✅ → Mark used\[1] = true → go to `pos = 2`

     - Try `i = 2`: `2 % 2 == 0` ✅ → Mark used\[2] = true → `pos = 3` > n → found 1 valid arrangement `[1, 2]`

   - Backtrack, unmark used\[2], used\[1]
   - Try `i = 2`: `2 % 1 == 0` ✅ → Mark used\[2] = true → `pos = 2`

     - Try `i = 1`: `1 % 2 == 1`, `2 % 1 == 0` ✅ → Mark used\[1] = true → `pos = 3` > n → found another arrangement `[2, 1]`

✅ Total: 2 beautiful arrangements.

---

## 🔄 Time Complexity:

- Worst case: try all permutations → `O(n!)`
- But: we **prune** invalid cases early → much faster in practice, especially for smaller `n`.

---

## 🔧 Optimization Ideas (for larger `n`):

1. **Bitmasking** instead of array for `used` to speed things up.
2. **Memoization** if you want to count with repeated subproblem states (not as useful here).

---

Let me know if you want the **bitmask version**, or a **step-by-step trace** for `n = 3`!
