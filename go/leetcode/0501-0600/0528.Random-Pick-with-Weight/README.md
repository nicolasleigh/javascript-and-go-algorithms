# [528. Random Pick with Weight (Medium)](https://leetcode.com/problems/random-pick-with-weight/)

<div><div class="elfjS" data-track-load="description_content"><p>You are given a <strong>0-indexed</strong> array of positive integers <code>w</code> where <code>w[i]</code> describes the <strong>weight</strong> of the <code>i<sup>th</sup></code> index.</p>

<p>You need to implement the function <code>pickIndex()</code>, which <strong>randomly</strong> picks an index in the range <code>[0, w.length - 1]</code> (<strong>inclusive</strong>) and returns it. The <strong>probability</strong> of picking an index <code>i</code> is <code>w[i] / sum(w)</code>.</p>

<ul>
	<li>For example, if <code>w = [1, 3]</code>, the probability of picking index <code>0</code> is <code>1 / (1 + 3) = 0.25</code> (i.e., <code>25%</code>), and the probability of picking index <code>1</code> is <code>3 / (1 + 3) = 0.75</code> (i.e., <code>75%</code>).</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input</strong>
["Solution","pickIndex"]
[[[1]],[]]
<strong>Output</strong>
[null,0]

<strong>Explanation</strong>
Solution solution = new Solution([1]);
solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input</strong>
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
<strong>Output</strong>
[null,1,1,1,1,0]

<strong>Explanation</strong>
Solution solution = new Solution([1, 3]);
solution.pickIndex(); // return 1. It is returning the second element (index = 1) that has a probability of 3/4.
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 0. It is returning the first element (index = 0) that has a probability of 1/4.

Since this is a randomization problem, multiple answers are allowed.
All of the following outputs can be considered correct:
[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
and so on.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= w.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= w[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>pickIndex</code> will be called at most <code>10<sup>4</sup></code> times.</li>
</ul>
</div></div>

Topics:
Array,
Math,
Binary Search,
Prefix Sum,
Randomized

---

Absolutely! Let's walk through a **deeper explanation** of how **LeetCode 528. Random Pick with Weight** works.

---

## 🧩 Goal Recap

You're given an array `w = [w₀, w₁, w₂, ..., wₙ]`. You need to randomly return an index `i` such that the probability of choosing index `i` is:

```
P(i) = w[i] / sum(w)
```

So if `w = [1, 3]`, you should return:

- index `0` with 25% chance
- index `1` with 75% chance

---

## 🎯 Strategy

This is a **weighted random selection problem**, and we solve it in two steps:

### 1. Build Prefix Sum

From the weights, we create a prefix sum array:

```js
w = [1, 3];
prefixSum = [1, 4];
```

This array maps index ranges like this:

- index 0 is in range `[0, 1)`
- index 1 is in range `[1, 4)`

So the total range is `[0, 4)` — and index 1 occupies 3 out of the 4 units → 75% chance.

---

### 2. Pick a Random Number

We simulate random picking by:

```js
target = Math.random() * totalSum;
```

- `Math.random()` returns a float in `[0, 1)`
- Multiply by totalSum → float in `[0, totalSum)`

Example:

- If `totalSum = 4`, `target` is a float like `2.13`, `3.91`, etc.

Now we **find which index's range** the `target` falls into using **binary search** on `prefixSum`.

---

### 🧠 Why Binary Search?

Because `prefixSum` is sorted, we can efficiently find the first index `i` such that:

```js
prefixSum[i] > target;
```

This is the correct index corresponding to the `target`.

---

## ✅ Complete Example

### Input:

```js
w = [1, 3, 2];
```

### Step 1: Build prefixSum

```js
prefixSum = [1, 4, 6]  // ranges:
index 0: [0, 1)
index 1: [1, 4)
index 2: [4, 6)
```

### Step 2: Pick a random number between 0 and 6

Let’s say `target = 4.5`

### Step 3: Binary search `prefixSum` to find the index

- 4.5 > 1 (index 0) → keep going
- 4.5 > 4 (index 1) → keep going
- 4.5 < 6 (index 2) → return index 2 ✅

---

## 🕒 Time Complexity Recap

| Operation   | Time     |
| ----------- | -------- |
| Constructor | O(n)     |
| pickIndex   | O(log n) |
| Space       | O(n)     |

---

Let me know if you'd like:

- A diagram to visualize the range mapping
- A simulation to test the random output distribution
- A breakdown of the binary search logic itself

I'm happy to walk through any part in more detail!

---

Great question! Let's dive deeper into the **binary search** part used in `pickIndex()` for **LeetCode 528. Random Pick with Weight**.

---

## 🎯 Purpose of Binary Search Here

We want to find the **smallest index `i`** such that:

```js
prefixSum[i] > target;
```

This index corresponds to the weight segment that the random `target` falls into. Since `prefixSum` is **strictly increasing** (all weights are > 0), **binary search is ideal** to locate the correct index in **O(log n)** time.

---

## 🧪 Step-by-step Example

Let's say we have:

```js
w = [2, 5, 3];
prefixSum = [2, 7, 10];
totalSum = 10;
```

So:

- index 0 → \[0, 2)
- index 1 → \[2, 7)
- index 2 → \[7, 10)

Now suppose:

```js
target = 6.4;
```

We want the **first index `i`** where `prefixSum[i] > 6.4`.

### 🧮 Binary Search Simulation

```js
left = 0;
right = 2;
```

Loop:

1. `mid = Math.floor((0 + 2) / 2) = 1`

   - `prefixSum[1] = 7`
   - `7 > 6.4` → good, maybe there's a smaller one → `right = mid = 1`

2. `mid = Math.floor((0 + 1) / 2) = 0`

   - `prefixSum[0] = 2`
   - `2 < 6.4` → need a bigger value → `left = mid + 1 = 1`

Now:

```js
left = right = 1;
```

Loop ends, so we return `left = 1`.

✅ This means `target = 6.4` falls in index 1’s range → `[2, 7)`

---

## 🧠 Key Binary Search Pattern

This is a **lower bound binary search** — finding the **first index** where a value is greater than a given target:

```js
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  if (target < prefixSum[mid]) {
    right = mid;
  } else {
    left = mid + 1;
  }
}
```

At the end:

- `left === right`
- `prefixSum[left] > target`
- It’s the index you're looking for

---

## ✅ Why This Works Reliably

Because:

- `prefixSum[]` is strictly increasing (weights are all positive)
- Binary search reduces time complexity to **O(log n)**
- It handles floating-point randomness (`Math.random() * total`) perfectly

---

Let me know if you want:

- A drawing of how ranges map to indices
- A live code demo in JS or Python
- An explanation of why we set `right = mid` instead of `mid - 1`

Happy to go deeper!
