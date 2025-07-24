# [494. Target Sum (Medium)](https://leetcode.com/problems/target-sum)

<p>You are given an integer array <code>nums</code> and an integer <code>target</code>.</p>

<p>You want to build an <strong>expression</strong> out of nums by adding one of the symbols <code>&#39;+&#39;</code> and <code>&#39;-&#39;</code> before each integer in nums and then concatenate all the integers.</p>

<ul>
	<li>For example, if <code>nums = [2, 1]</code>, you can add a <code>&#39;+&#39;</code> before <code>2</code> and a <code>&#39;-&#39;</code> before <code>1</code> and concatenate them to build the expression <code>&quot;+2-1&quot;</code>.</li>
</ul>

<p>Return the number of different <strong>expressions</strong> that you can build, which evaluates to <code>target</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,1,1], target = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1], target = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 20</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>0 &lt;= sum(nums[i]) &lt;= 1000</code></li>
	<li><code>-1000 &lt;= target &lt;= 1000</code></li>
</ul>

**Companies**:
[Facebook](https://leetcode.com/company/facebook), [Amazon](https://leetcode.com/company/amazon), [Google](https://leetcode.com/company/google), [Bloomberg](https://leetcode.com/company/bloomberg), [Nuro](https://leetcode.com/company/nuro), [Adobe](https://leetcode.com/company/adobe), [Uber](https://leetcode.com/company/uber), [Apple](https://leetcode.com/company/apple), [Yahoo](https://leetcode.com/company/yahoo)

**Related Topics**:  
[Array](https://leetcode.com/tag/array), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming), [Backtracking](https://leetcode.com/tag/backtracking)

**Similar Questions**:

- [Expression Add Operators (Hard)](https://leetcode.com/problems/expression-add-operators)
- [Ways to Express an Integer as Sum of Powers (Medium)](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers)

## NOTE

Related to [416. Partition Equal Subset Sum (Medium)](https://leetcode.com/problems/partition-equal-subset-sum/)

---

Great! Let’s now look at a slightly larger example to better understand how the **recursion tree** grows and where memoization helps.

---

## 🔢 Input Example:

```js
(nums = [1, 1, 1]), (target = 1);
```

We want to find **how many ways** we can assign `+` or `-` to the numbers so that their total equals `1`.

---

## 🌳 Recursion Tree (Visualized up to depth 3)

```
                                 dfs(0, 0)
                               /            \
                     dfs(1, 1)                 dfs(1, -1)
                    /        \                /             \
           dfs(2, 2)       dfs(2, 0)         dfs(2, 0)           dfs(2, -2)
            /    \         /     \           /         \         /        \
  dfs(3, 3) dfs(3, 1) dfs(3, 1) dfs(3, -1) dfs(3, 1) dfs(3, -1) dfs(3, -1) dfs(3, -3)
```

---

### 🧠 Leaf Nodes (base cases at index = 3):

We check which of these sums equal the target `1`:

- `dfs(3, 3)` → ❌
- `dfs(3, 1)` → ✅
- `dfs(3, 1)` → ✅
- `dfs(3, -1)` → ❌
- `dfs(3, 1)` → ✅
- `dfs(3, -1)` → ❌
- `dfs(3, -1)` → ❌
- `dfs(3, -3)` → ❌

✅ We get **3 valid paths** where the final sum is `1`.

---

## ✅ Final Result:

```js
findTargetSumWays([1, 1, 1], 1) === 3;
```

---

## 💡 Where Memoization Helps:

Notice how we called `dfs(2, 0)` and `dfs(3, 1)` **multiple times**. Without memoization, these calls would recompute the same values. Memoization ensures we only compute each `(index, sum)` combination **once**.

---

### 📌 Valid paths for \[1, 1, 1], target = 1:

1. `+1 +1 -1` = 1
2. `+1 -1 +1` = 1
3. `-1 +1 +1` = 1

(Other combinations give sums of 3, -1, or -3)

---

Would you like an **ASCII diagram**, **image diagram**, or even a **step-by-step code trace** next?

---

You're working on LeetCode **494. Target Sum**, and the solution you've posted cleverly transforms the problem into a **subset sum problem**, which can then be solved using **dynamic programming**.

Let’s walk through it step by step.

---

## 🔍 Problem Overview

Given an array `nums` and an integer `target`, you are to assign `+` or `-` before each number and count how many ways the expression evaluates to the `target`.

---

## 🧠 Key Insight: Transform into Subset Sum

Let’s call:

- `P` the subset of numbers assigned a **plus sign**.
- `N` the subset assigned a **minus sign**.

We want:

```
sum(P) - sum(N) = target
```

But we also know:

```
sum(P) + sum(N) = sum(nums)
```

Now combine the two equations:

```
sum(P) - sum(N) = target
sum(P) + sum(N) = sum
------------------------
2 * sum(P) = target + sum
```

So:

```
sum(P) = (target + sum) / 2
```

This is the core idea!

Now the problem becomes:
➡️ How many subsets of `nums` sum up to **`(sum + target) / 2`**?

Let’s define that as `l`.

---

## 🔒 Edge Case Check

```js
if (sum < Math.abs(target) || (sum + target) % 2 !== 0) return 0;
```

- If `target` is too large, it's impossible.
- If `(sum + target)` is odd, `l` will not be an integer. Subsets must sum to an integer.

---

## 🧮 DP Subset Sum

We define `dp[i]` as the number of ways to sum up to `i` using any subset of `nums`.

### Initialization

```js
let dp = Array(l + 1).fill(0);
dp[0] = 1;
```

- One way to get sum 0: choose nothing.

### Loop

```js
for (let i = 1; i <= nums.length; i++) {
  for (let j = l; j >= 0; j--) {
    if (nums[i - 1] <= j) {
      dp[j] = dp[j] + dp[j - nums[i - 1]];
    }
  }
}
```

**Why reverse loop?**

Because we want to avoid **overcounting** a number multiple times. We go from high to low to ensure each number is only used once per `i`.

**What is happening?**

For every number in `nums`, we're checking:

- For each target sum `j` from `l` to `0`,

  - If current number can be included (i.e., `nums[i - 1] <= j`),
  - Then: add ways to make `j - nums[i - 1]` to `dp[j]`.

This builds up the number of ways to reach sum `l`.

---

## ✅ Return Answer

```js
return dp[l];
```

This gives the number of ways to assign `+` and `-` signs to make the sum equal `target`.

---

## 🧪 Example

```js
(nums = [1, 1, 1, 1, 1]), (target = 3);
```

- sum = 5
- (sum + target) / 2 = (5 + 3)/2 = 4
- So now we want to count number of subsets that sum to 4 → answer is 5

---

## 💡 Summary

This solution uses:

- Mathematical transformation from `+/-` assignment to **subset sum**
- 1D **dynamic programming** to count subsets with sum `l`

Let me know if you want a **Go version** or to see how the **2D DP table** would look.
