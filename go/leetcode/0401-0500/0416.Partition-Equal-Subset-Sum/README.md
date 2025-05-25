# [416. Partition Equal Subset Sum (Medium)](https://leetcode.com/problems/partition-equal-subset-sum)

<p>Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,11,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> The array can be partitioned as [1, 5, 5] and [11].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,5]
<strong>Output:</strong> false
<strong>Explanation:</strong> The array cannot be partitioned into equal sum subsets.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 200</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Yahoo](https://leetcode.com/company/yahoo), [TikTok](https://leetcode.com/company/tiktok), [Expedia](https://leetcode.com/company/expedia), [Facebook](https://leetcode.com/company/facebook), [Microsoft](https://leetcode.com/company/microsoft), [Apple](https://leetcode.com/company/apple), [Google](https://leetcode.com/company/google), [Walmart Labs](https://leetcode.com/company/walmart-labs), [Uber](https://leetcode.com/company/uber), [LinkedIn](https://leetcode.com/company/linkedin), [Bloomberg](https://leetcode.com/company/bloomberg), [ByteDance](https://leetcode.com/company/bytedance), [Infosys](https://leetcode.com/company/infosys), [Hive](https://leetcode.com/company/hive), [eBay](https://leetcode.com/company/ebay)

**Related Topics**:  
[Array](https://leetcode.com/tag/array), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming)

**Similar Questions**:

- [Partition to K Equal Sum Subsets (Medium)](https://leetcode.com/problems/partition-to-k-equal-sum-subsets)
- [Minimize the Difference Between Target and Chosen Elements (Medium)](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements)
- [Maximum Number of Ways to Partition an Array (Hard)](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array)
- [Partition Array Into Two Arrays to Minimize Sum Difference (Hard)](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference)
- [Find Subarrays With Equal Sum (Easy)](https://leetcode.com/problems/find-subarrays-with-equal-sum)
- [Number of Great Partitions (Hard)](https://leetcode.com/problems/number-of-great-partitions)
- [Split With Minimum Sum (Easy)](https://leetcode.com/problems/split-with-minimum-sum)

## NOTE

Related to [494. Target Sum (Medium)](https://leetcode.com/problems/target-sum/)

---

Great question!

### 💡 Why is Leetcode 416 a **0/1 Knapsack** problem?

The **0/1 Knapsack** problem is about:

- Choosing items with given weights and values.
- Each item can be **included once (0 or 1 times)**.
- Goal: maximize or match a **capacity constraint**.

---

### ✅ Similarities with Problem 416:

| Knapsack Problem                        | Partition Equal Subset Sum                    |
| --------------------------------------- | --------------------------------------------- |
| Each item has a **weight**              | Each number in `nums` is treated as a weight  |
| Max weight/capacity is `W`              | Target subset sum is `sum(nums) / 2`          |
| Choose each item **at most once**       | You can either include a number or not (0/1)  |
| Goal: Can you fill the knapsack exactly | Goal: Can you get a subset with sum = target? |

---

### ✅ Reformulated:

> Can you **select a subset of numbers (0 or 1 of each)** that **adds up exactly to** `sum(nums) / 2`?

This is **exactly** the 0/1 knapsack decision problem with:

- Items: `nums`
- Weights: each number
- Capacity: `sum(nums) / 2`
- Value: not needed — we're just answering "can it be filled?"

---

### ❗ Why not Unbounded Knapsack?

Because **each number can only be used once**, not multiple times — that’s what makes it **0/1**.

---

Let me know if you want a diagram or further breakdown!

---

To solve **LeetCode 416 - Partition Equal Subset Sum** using the **0/1 Knapsack** approach, follow this structured plan:

---

### 🎯 **Goal:**

Find whether a **subset** of `nums` exists such that the **sum is equal to** `sum(nums) / 2`.

Let’s call this value **target**.

---

### 🧠 Step-by-Step Explanation Using 0/1 Knapsack

#### **Step 1: Understand the Problem**

- Each number in `nums` is like an item with a **weight**.
- We want to pick a subset of items such that their total weight (sum) = `target`.
- We cannot use the same number more than once → **0/1 Knapsack**.

---

#### **Step 2: Initialization**

- Let `target = sum(nums) / 2`. If total sum is **odd**, return `false` immediately.
- Create a 1D DP array: `dp[i]` means: _Can we reach sum `i` using some subset?_
- Initialize:

  ```js
  dp[0] = true // sum of 0 is always possible (with empty subset)
  rest dp[i] = false
  ```

---

#### **Step 3: DP State Transition**

For each number `num` in `nums`, update `dp` **from right to left**:

```js
for (let i = target; i >= num; i--) {
  dp[i] = dp[i] || dp[i - num];
}
```

- `dp[i] = true` if:

  - It was already `true` (we could reach `i` before), OR
  - We can reach `i - num`, and add `num` to get `i`.

**Why go backward?** To **avoid reusing** the same number in the same iteration (0/1 constraint).

---

#### **Step 4: Final Answer**

Return `dp[target]` — can we reach the subset sum exactly equal to `target`?

---

### ✅ Full Working JS Code:

```js
var canPartition = function (nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  if (total % 2 !== 0) return false;

  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
};
```

---

### 🔁 Summary:

| Concept        | Value in this problem                    |
| -------------- | ---------------------------------------- |
| Items          | Numbers in the array                     |
| Weights        | Each number’s value                      |
| Capacity       | `sum(nums) / 2`                          |
| 0/1 Constraint | Each number can be used only once        |
| Goal           | Can we reach exact `target` with subset? |

Let me know if you want a **2D version** of the solution or a **visual demo** of the DP table!

---

Absolutely — this is a **key idea** in converting the **2D 0/1 Knapsack** solution to a more space-efficient **1D DP array**.

---

## 🔄 Why do we iterate **backward** in 0/1 Knapsack?

In this problem, the core update is:

```js
for (let i = target; i >= num; i--) {
    dp[i] = dp[i] || dp[i - num];
}
```

### ✅ The Reason: **Avoid Reusing the Same Number Multiple Times**

Let’s break it down with an example:

---

### 🔍 Suppose:

* `nums = [1, 2, 3]`
* `target = 5`
* Initially: `dp = [true, false, false, false, false, false]`

---

### 🚫 If we go **forward** (i.e., `i = num` to `target`):

```js
for (let i = num; i <= target; i++) {
    dp[i] = dp[i] || dp[i - num];
}
```

Say we’re processing `num = 2`:

* When `i = 2`:
  `dp[2] = dp[2] || dp[0] → true` ✅

* When `i = 4`:
  `dp[4] = dp[4] || dp[2]` ← But we **just updated** `dp[2] = true` in this same iteration!

👉 This means we're **reusing `num = 2` again**, violating the **0/1 constraint** (each number only once).

---

### ✅ If we go **backward** (i = target down to num):

```js
for (let i = target; i >= num; i--) {
    dp[i] = dp[i] || dp[i - num];
}
```

Now, when processing `num = 2`:

* We update `dp[2] = dp[2] || dp[0] → true`
* But `dp[4] = dp[4] || dp[2]` will **not be influenced by the updated `dp[2]`**, because we haven't reached `dp[2]` yet — we're still working our way down.

So we're always relying on the **previous state of the array**, which reflects the result **before** using the current number — exactly what 0/1 Knapsack requires.

---

### 🎯 Key Rule:

> When using **1D DP for 0/1 Knapsack**, iterate **from right to left** to **prevent reusing** the same item within the same round.

---

### Bonus Tip:

If you're doing **Unbounded Knapsack** (where items can be used multiple times), then you **do go forward** (left to right), because reusing is allowed.

---

Let me know if you'd like a visualization of how `dp` evolves!
