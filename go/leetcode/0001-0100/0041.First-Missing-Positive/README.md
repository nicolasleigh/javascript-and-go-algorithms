# [41. First Missing Positive (Hard)](https://leetcode.com/problems/first-missing-positive/)

<p>Given an unsorted integer array, find the smallest missing&nbsp;positive integer.</p>

<p><strong>Example 1:</strong></p>

<pre>Input: [1,2,0]
Output: 3
</pre>

<p><strong>Example 2:</strong></p>

<pre>Input: [3,4,-1,1]
Output: 2
</pre>

<p><strong>Example 3:</strong></p>

<pre>Input: [7,8,9,11,12]
Output: 1
</pre>

<p><strong>Note:</strong></p>

<p>Your algorithm should run in <em>O</em>(<em>n</em>) time and uses constant extra space.</p>

**Related Topics**:  
[Array](https://leetcode.com/tag/array/)

**Similar Questions**:

- [Missing Number (Easy)](https://leetcode.com/problems/missing-number/)
- [Find the Duplicate Number (Medium)](https://leetcode.com/problems/find-the-duplicate-number/)
- [Find All Numbers Disappeared in an Array (Easy)](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
- [Couples Holding Hands (Hard)](https://leetcode.com/problems/couples-holding-hands/)

---

No problem! This solution can seem tricky at first. Let me break it down **step by step** with a **concrete example** so it’s easier to understand.

---

### **🧠 Goal of the Problem**

We’re given an **unsorted** array of integers, and we need to find the **smallest positive integer (≥1)** that is **missing** from it.

---

### ✅ Key Insight (In-Place Algorithm)

- If we could **rearrange** the array so that:

  - value `1` is at index `0`,
  - value `2` is at index `1`,
  - value `3` is at index `2`,
  - ...,
  - value `n` is at index `n-1`,

  Then we could just scan the array and **find the first index `i`** where `nums[i] !== i + 1`. That means `i + 1` is missing.

---

### 🧪 Example

Input: `[3, 4, -1, 1]`
Goal: Find the **first missing positive**.

Let’s walk through it.

---

#### Step 1: Place numbers in the "correct" positions

We'll **swap elements** until each number `x` is in position `x - 1`, _only if it's in the range 1 to n (array length)_.

Start:

```
Index:  0   1   2   3
Array: [3,  4, -1,  1]
```

Loop through each element:

- `nums[0] = 3` → valid (1 ≤ 3 ≤ 4), should go to index `2`
  → swap `nums[0]` and `nums[2]`:
  Result: `[-1, 4, 3, 1]`

- `nums[0] = -1` → invalid (skip)

- `nums[1] = 4` → should go to index `3`
  → swap `nums[1]` and `nums[3]`:
  Result: `[-1, 1, 3, 4]`

- `nums[1] = 1` → should go to index `0`
  → swap `nums[1]` and `nums[0]`:
  Result: `[1, -1, 3, 4]`

Now we continue, but everything is in place.

---

#### Step 2: Scan for the first mismatch

```
Index:  0   1   2   3
Array: [1, -1, 3, 4]
```

Check:

- `nums[0] == 1` ✅
- `nums[1] == 2` ❌ → So the first missing positive is `2`

---

### 🔁 Code Reflection

```js
while (
  nums[i] > 0 && // only positive numbers
  nums[i] <= n && // must be within [1, n]
  nums[nums[i] - 1] !== nums[i] // avoid infinite loop when duplicates
) {
  const correctIndex = nums[i] - 1;
  [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
}
```

This loop ensures **each valid number is moved to its correct position** if not already there.

---

### 🧩 Final Result

If everything is in the right place (`nums[i] == i + 1`), return `n + 1`.

---

### 🔚 Summary

This algorithm:

- Sorts the array **in-place** (no extra space).
- Finds the first missing positive in **O(n)** time.
- Avoids using `Map` or `Set` by cleverly organizing the values.

Let me know if you'd like a version with detailed inline comments!
