# [179. Largest Number (Medium)](https://leetcode.com/problems/largest-number/)

<p>Given a list of non negative integers, arrange them such that they form the largest number.</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> <code>[10,2]</code>
<strong>Output:</strong> "<code>210"</code></pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> <code>[3,30,34,5,9]</code>
<strong>Output:</strong> "<code>9534330"</code>
</pre>

<p><strong>Note:</strong> The result may be very large, so you need to return a string instead of an integer.</p>

**Related Topics**:  
[Sort](https://leetcode.com/tag/sort/)

---

Great question! The custom comparator is the **heart of the solution**, so let me break it down clearly and step-by-step.

---

## 💡 Problem Summary

You’re given an array of numbers like `[3, 30, 34, 5, 9]` and asked to **arrange them to form the largest possible number**.

But directly sorting by value doesn’t work. For example:

- `30` is smaller than `3`, but `"330"` is bigger than `"303"`.

So, we need a new rule for comparison.

---

## ✅ Key Insight

Instead of comparing `a` and `b` directly, **we compare**:

```js
a + b  vs  b + a
```

But not as numbers — as **strings**.

### Example:

Suppose `a = 3`, `b = 30`

- `"330"` vs `"303"` → `"330"` is **larger**, so `3` should come **before** `30`.

---

## 🔧 Custom Comparator in Code

```js
nums.sort((a, b) => {
  const s1 = "" + a + b; // a followed by b
  const s2 = "" + b + a; // b followed by a
  return s2.localeCompare(s1); // if s1 > s2, return -1 (put a before b)
});
```

This means:

- If `a + b` is bigger, put `a` first.
- If `b + a` is bigger, put `b` first.

We use `.localeCompare()` because it compares **strings** in lexicographic order:

- `s1.localeCompare(s2)` returns:

  - `-1` if `s1 < s2`
  - `0` if `s1 == s2`
  - `1` if `s1 > s2`

But since we want the **largest** number first, we **reverse the logic**:

```js
return s2.localeCompare(s1);
```

---

## 🔄 Visual Example

Input: `[3, 30, 34, 5, 9]`

Let's apply the custom comparator:

- Compare `9` vs `5`: `"95"` > `"59"` → `9` first
- Compare `5` vs `34`: `"534"` > `"345"` → `5` first
- Compare `34` vs `3`: `"343"` > `"334"` → `34` first
- Compare `3` vs `30`: `"330"` > `"303"` → `3` first

Final sorted order: `[9, 5, 34, 3, 30]`
Result: `"9534330"`

---

## ✅ Final Output

```js
return nums.join("");
```

---

Let me know if you’d like a visual diagram or how to implement this sort manually!

---

Great question — this is the **key to understanding how custom comparators work in JavaScript’s `Array.prototype.sort()`**.

---

### ✅ `sort()` expects your comparator to return:

* **Negative number** → `a` comes **before** `b`
* **Zero** → Keep `a` and `b` in the **same order**
* **Positive number** → `a` comes **after** `b`

So when you write:

```js
nums.sort((a, b) => s2.localeCompare(s1));
```

you’re saying:

> Compare **b+a** with **a+b**.
> If `b+a > a+b`, that means `b` should come **before** `a`.
> So we return a **positive number**, and JS puts `a` **after** `b`.

---

### 🔍 Why `s2.localeCompare(s1)`?

* Example: `a = 3`, `b = 30`

  * `a + b = "330"`
  * `b + a = "303"`
  * `"330" > "303"` → `a` should come before `b`
  * `s2.localeCompare(s1)` becomes `"303".localeCompare("330")` → **-1**
  * That return value of **-1** tells `sort()` to put `a` **before** `b`

So we’re flipping the comparison (doing `b+a` vs `a+b`) to sort in **descending** order of combined string value.

---

### 🔁 TL;DR

```js
nums.sort((a, b) => (b + '' + a).localeCompare(a + '' + b));
```

We do this because we want to **simulate descending order** on string concatenation.

---

Let me know if you want this rewritten with a more manual comparison (e.g., using `if` statements) — it might make it even clearer.
