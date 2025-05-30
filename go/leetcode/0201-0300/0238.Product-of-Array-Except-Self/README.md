# [238. Product of Array Except Self (Medium)](https://leetcode.com/problems/product-of-array-except-self/description/)

<div><div class="elfjS" data-track-load="description_content"><p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.</p>

<p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and without using the division operation.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> [24,12,8,6]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [-1,1,0,-3,3]
<strong>Output:</strong> [0,0,9,0,0]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-30 &lt;= nums[i] &lt;= 30</code></li>
	<li>The input is generated such that <code>answer[i]</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong>&nbsp;Can you solve the problem in <code>O(1)</code>&nbsp;extra&nbsp;space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)</p>
</div></div>

**Companies**:  
[Facebook](https://leetcode.com/company/facebook), [Amazon](https://leetcode.com/company/amazon), [Apple](https://leetcode.com/company/apple), [Microsoft](https://leetcode.com/company/microsoft), [Asana](https://leetcode.com/company/asana), [Adobe](https://leetcode.com/company/adobe), [Nutanix](https://leetcode.com/company/nutanix), [Lyft](https://leetcode.com/company/lyft), [Nvidia](https://leetcode.com/company/nvidia), [Intel](https://leetcode.com/company/intel), [VMware](https://leetcode.com/company/vmware)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/) | Prefix Sum

**Similar Questions**:

- [Trapping Rain Water (Hard)](https://leetcode.com/problems/trapping-rain-water/)
- [Maximum Product Subarray (Medium)](https://leetcode.com/problems/maximum-product-subarray/)
- [Paint House II (Hard)](https://leetcode.com/problems/paint-house-ii/)

---

Absolutely! Let’s go step-by-step to explain the **intuition and mechanics** behind the solution for **Leetcode 238: Product of Array Except Self**.

---

### 🧩 Goal:

For each index `i`, we want to compute the **product of all numbers in the array except `nums[i]`**, and we **cannot use division**.

---

### 🔍 Key Idea: Split into Left and Right Products

Let’s break this into **two parts**:

- `left[i]` = product of all elements **to the left** of index `i`
- `right[i]` = product of all elements **to the right** of index `i`

Then the result for index `i` is:

```
result[i] = left[i] * right[i]
```

---

### 🔁 Step-by-Step Example

Input:

```js
nums = [1, 2, 3, 4];
```

We initialize `res` with all 1s:

```js
res = [1, 1, 1, 1];
```

#### Pass 1: Compute Left Products

We compute the product of elements to the left of each index:

```text
i = 0: nothing to the left → res[0] = 1
i = 1: product of [0] = 1 → res[1] = 1
i = 2: product of [0,1] = 1*2 = 2 → res[2] = 2
i = 3: product of [0,1,2] = 1*2*3 = 6 → res[3] = 6
```

Result after pass 1:

```js
res = [1, 1, 2, 6];
```

#### Pass 2: Multiply with Right Products

Now, we multiply with products from the **right** side:

We initialize `right = 1` and go **backward**:

```text
i = 3: nothing to the right → res[3] *= 1 → res[3] = 6
update right = right * nums[3] = 1 * 4 = 4

i = 2: res[2] *= right = 2 * 4 = 8
update right = 4 * nums[2] = 4 * 3 = 12

i = 1: res[1] *= right = 1 * 12 = 12
update right = 12 * nums[1] = 12 * 2 = 24

i = 0: res[0] *= right = 1 * 24 = 24
```

Final result:

```js
res = [24, 12, 8, 6];
```

✅ That’s the desired output!

---

### 💡 Why it works:

At each index `i`, we:

- Multiply everything before it (`left product`)
- Multiply everything after it (`right product`)
- Done in **O(n)** time with **constant extra space** (excluding result array).

---

### 💻 Final Code Recap:

```javascript
var productExceptSelf = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    res[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};
```

---

Would you like a **visual diagram**, or a version in **Python**, **Go**, or with **comments** in each step?
