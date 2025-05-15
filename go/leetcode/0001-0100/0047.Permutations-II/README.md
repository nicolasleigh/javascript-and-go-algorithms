# [47. Permutations II (Medium)](https://leetcode.com/problems/permutations-ii/)

<p>Given a collection of numbers, <code>nums</code>,&nbsp;that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong>
[[1,1,2],
 [1,2,1],
 [2,1,1]]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 8</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
</ul>

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Backtracking](https://leetcode.com/tag/backtracking/)

**Similar Questions**:

- [Next Permutation (Medium)](https://leetcode.com/problems/next-permutation/)
- [Permutations (Medium)](https://leetcode.com/problems/permutations/)
- [Palindrome Permutation II (Medium)](https://leetcode.com/problems/palindrome-permutation-ii/)
- [Number of Squareful Arrays (Hard)](https://leetcode.com/problems/number-of-squareful-arrays/)

---

Great! Let's break down the **Leetcode 47: Permutations II (Medium)** solution you posted and explain it step by step.

---

## 🧩 Problem Summary

You're given an array `nums` that **may contain duplicates**, and you need to return **all unique permutations** of the array.

---

## ✅ Approach: Backtracking with Duplicate Skipping

```js
var permuteUnique = function (nums) {
  let res = [];
  let comb = [];
  nums.sort((a, b) => a - b); // Step 1: sort to detect duplicates
  let usedArr = new Array(nums.length).fill(false); // Step 2: track used indexes

  function backtrack() {
    if (comb.length === nums.length) {
      res.push([...comb]); // copy current combination
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (usedArr[i]) continue; // already used in current permutation

      // Step 3: skip duplicate values at the same tree level
      if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;

      usedArr[i] = true;
      comb.push(nums[i]);

      backtrack(); // go deeper

      // backtrack
      comb.pop();
      usedArr[i] = false;
    }
  }

  backtrack();
  return res;
};
```

---

## 🧠 Key Concepts

### 1. **Why Sort First?**

Sorting allows us to easily detect duplicates like `1,1,2`. This is crucial for pruning duplicate paths during backtracking.

### 2. **usedArr (boolean array)**

Instead of a `Set`, a `boolean[]` array tracks whether each index in `nums` is used in the current recursive path. This is necessary because:

- We care about **indexes**, not values (e.g., `[1, 1]` has two 1s in different positions).
- A `Set` wouldn't work correctly for duplicates.

### 3. **Duplicate Skipping Condition**

```js
if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;
```

This line prevents **generating the same permutation multiple times**. Here's how:

- If the current number is the same as the previous (`nums[i] === nums[i - 1]`) **and**
- The previous one **has not** been used in this recursive call (`!usedArr[i - 1]`), then skip this number.

This ensures that we only take the **first occurrence** of a number at each depth in the recursion tree.

---

## 🔁 Example

For `nums = [1,1,2]`:

### Step-by-step unique permutations:

- `[1,1,2]`
- `[1,2,1]`
- `[2,1,1]`

The duplicate `[1,1,2]` is **not repeated**, thanks to that clever skip condition.

---

## 📌 Summary

| Step             | Why it's Needed                                         |
| ---------------- | ------------------------------------------------------- |
| `sort(nums)`     | To bring duplicates together so we can detect them      |
| `usedArr`        | To track which indexes are already used                 |
| `skip condition` | To avoid generating duplicate permutations              |
| `backtrack()`    | The core recursive function for generating permutations |

---

Let me know if you'd like a **tree diagram** of the recursion or help implementing this in another language (like Go)!

---

That's a **great** question — and it's **crucial** to understand that condition to truly grasp how duplicates are avoided.

Let’s break it down clearly and visually.

---

## 📌 What does this line mean?

```js
if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;
```

This says:

> If `nums[i]` is the **same as** the **previous element** (`nums[i - 1]`), and **you didn’t use** `nums[i - 1]` in this recursive branch, then **skip** `nums[i]`.

---

## 🧠 But Why?

Let’s look at an example to see **what would happen if we didn't skip it**:

### Example: `nums = [1, 1, 2]` (after sorting)

We want to generate **all unique permutations**, but without the condition, we'd get **duplicate results** like:

- `[1,1,2]`
- `[1,1,2]` ← duplicate

So how does this condition help?

---

## 🧱 Visualizing the Backtracking Tree

At the top level, we can choose:

- First `1` (index 0)
- Second `1` (index 1)
- `2` (index 2)

Suppose we pick the **first `1` (index 0)**:

- Next level: pick second `1` (index 1)
- Then pick `2` → ✅ we get `[1,1,2]`

Then we **go back** and try picking **second `1` (index 1) first**:

- If we allow it, we’d also pick the first `1` later, and again get `[1,1,2]` → duplicate

### ⛔ Problem:

If we allow **both `1`s to start** a branch at the same tree level, we get the **same result twice**.

---

## ✅ Solution: "Only use the **first** of the duplicates at the same tree level"

That's what this line does:

```js
if (nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;
```

### It says:

> If I'm trying to use a duplicate (i.e., `nums[i] === nums[i - 1]`), I can **only** use it **if the previous duplicate has been used in this recursive path.**

In other words:

- If `usedArr[i - 1] == true`, then we're building a combination like `[1 (used), 1 (current)]` — that's valid.
- But if `usedArr[i - 1] == false`, and we pick `nums[i]`, then it's just a **duplicate tree branch** → we skip it.

---

## 🔁 Intuition:

We **only take the first duplicate at each level**. If we've **already skipped the first one**, we **must skip the rest**, otherwise we'll repeat the same work.

---

## ✅ TL;DR:

This line:

```js
if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;
```

**Prevents building the same permutation multiple times by:**

- Only using the first occurrence of a duplicate at the same recursive level
- Skipping the second one if the first hasn't been used in this path yet

---

If you'd like, I can draw a tree diagram or walk you through the execution line-by-line. Want to see that?

---

Great! Let's draw a tree diagram for `nums = [1, 1, 2]` to **visualize how duplicate pruning works**.

---

### Input: `[1, 1, 2]`

(Sorted already)

We'll represent each level of the tree as a step in the permutation-building process.
We'll also mark `❌` when a **duplicate path is skipped** due to this condition:

```js
if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;
```

---

### 🌳 Permutation Tree with Pruning

```
                             []
               ┌────────────┼────────────┐
             [1]          [1]           [2]
             (i=0)       (i=1)❌skip!    (i=2)
             used[0]=T   nums[1]==nums[0] && used[0]==false → skip

         ┌──────┼───────┐
      [1,1]   [1,2]     ——
     (i=1)   (i=2)

   ┌───┼─────┐
[1,1,2]  —   —
(i=2)
✔

[1,2,1]
✔

[2,1,1]
✔
```

---

### ✅ Final Unique Results:

1. `[1,1,2]`
2. `[1,2,1]`
3. `[2,1,1]`

---

### 🔍 Explanation of Skipping

At the top level:

- `i = 0 → 1` is picked
- `i = 1 → 1` is the **same as previous**, but since previous `1` (at `i=0`) hasn't been used, we skip it to **avoid building the same branch again**

Without this pruning, we would re-generate `[1,1,2]` from both paths.

---

Let me know if you’d like this tree **as an image**!
