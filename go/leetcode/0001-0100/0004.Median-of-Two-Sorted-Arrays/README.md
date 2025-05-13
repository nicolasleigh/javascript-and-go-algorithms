# [4. Median of Two Sorted Arrays (Hard)](https://leetcode.com/problems/median-of-two-sorted-arrays)

<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>

<p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums1.length == m</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 &lt;= m &lt;= 1000</code></li>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= m + n &lt;= 2000</code></li>
	<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Google](https://leetcode.com/company/google), [Adobe](https://leetcode.com/company/adobe), [Bloomberg](https://leetcode.com/company/bloomberg), [Apple](https://leetcode.com/company/apple), [Facebook](https://leetcode.com/company/facebook), [Yahoo](https://leetcode.com/company/yahoo), [Goldman Sachs](https://leetcode.com/company/goldman-sachs), [Microsoft](https://leetcode.com/company/microsoft), [TikTok](https://leetcode.com/company/tiktok), [Uber](https://leetcode.com/company/uber), [MathWorks](https://leetcode.com/company/mathworks), [Accenture](https://leetcode.com/company/accenture), [VMware](https://leetcode.com/company/vmware), [LinkedIn](https://leetcode.com/company/linkedin), [ServiceNow](https://leetcode.com/company/servicenow), [tcs](https://leetcode.com/company/tcs), [Walmart Labs](https://leetcode.com/company/walmart-labs), [PayPal](https://leetcode.com/company/paypal), [Oracle](https://leetcode.com/company/oracle), [Morgan Stanley](https://leetcode.com/company/morgan-stanley), [Samsung](https://leetcode.com/company/samsung), [Yandex](https://leetcode.com/company/yandex), [SAP](https://leetcode.com/company/sap), [Arcesium](https://leetcode.com/company/arcesium), [Sprinklr](https://leetcode.com/company/sprinklr), [Zoho](https://leetcode.com/company/zoho), [Capgemini](https://leetcode.com/company/capgemini), [OLX](https://leetcode.com/company/olx), [Zenefits](https://leetcode.com/company/zenefits), [Dropbox](https://leetcode.com/company/dropbox)

**Related Topics**:  
[Array](https://leetcode.com/tag/array), [Binary Search](https://leetcode.com/tag/binary-search), [Divide and Conquer](https://leetcode.com/tag/divide-and-conquer)

**Similar Questions**:

- [Median of a Row Wise Sorted Matrix (Medium)](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix)

---



This solution solves the **"Median of Two Sorted Arrays"** problem in **logarithmic time** using **binary search**, and your confusion lies in:

```js
let k = Math.ceil((m + n) / 2);
let nums2Mid = k - nums1Mid;
```

Let’s first understand the **goal**:

---

### 🔹 Goal: Find the Median of Two Sorted Arrays

* When the combined length `(m + n)` is **odd**, the **median** is the `k`-th smallest number.
* When `(m + n)` is **even**, the **median** is the **average** of the `k`-th and `(k+1)`-th smallest numbers.

In both cases, the **median lies around the middle**, so this solution tries to **find the k-th smallest element** in the merged array, without actually merging them.

---

### 🔹 Why `let k = Math.ceil((m + n) / 2);`

We are performing binary search to find the correct partition between `nums1` and `nums2` such that:

* The **left half** contains `k` elements.
* The **right half** contains the rest.

We want to divide the combined arrays into **two halves**, such that:

* All elements on the **left** are less than or equal to all elements on the **right**.
* The **left half has k elements**.

So `k = Math.ceil((m + n) / 2)` is the **target number of elements** on the left side.

> Even if the total length is even, we use `ceil()` because later we handle the even case by taking average of middle two numbers.

---

### 🔹 Why `let nums2Mid = k - nums1Mid;`

We are **binary searching** in `nums1` to find the correct number of elements to take from it (`nums1Mid`), so that the total left side (nums1 + nums2) has exactly `k` elements.

Hence:

```js
nums2Mid = k - nums1Mid;
```

This ensures that the total number of elements taken from `nums1` and `nums2` for the **left half** is exactly `k`.

---

### 🔸 Summary

* `k = Math.ceil((m + n) / 2)` → number of elements we want on the **left side** of the combined arrays.
* `nums1Mid = guess of how many elements to take from nums1`.
* `nums2Mid = k - nums1Mid` → the rest comes from nums2.

This setup lets the algorithm **partition both arrays correctly** and find the median in `O(log(min(m, n)))` time.

Let me know if you'd like a **step-by-step example** to see how this works in practice.
