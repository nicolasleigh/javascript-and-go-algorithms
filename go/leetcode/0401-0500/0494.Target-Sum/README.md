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
                               /          \
                     dfs(1, 1)            dfs(1, -1)
                    /        \           /          \
           dfs(2, 2)       dfs(2, 0)  dfs(2, 0)     dfs(2, -2)
            /    \         /     \     /     \       /     \
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
