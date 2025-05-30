# [295. Find Median from Data Stream (Hard)](https://leetcode.com/problems/find-median-from-data-stream/description/)

<div><div class="elfjS" data-track-load="description_content"><p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.</p>

<ul>
	<li>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.</li>
	<li>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>
</ul>

<p>Implement the MedianFinder class:</p>

<ul>
	<li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li>
	<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li>
	<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input</strong>
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
<strong>Output</strong>
[null, null, null, 1.5, null, 2.0]

<strong>Explanation</strong>
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-10<sup>5</sup> &lt;= num &lt;= 10<sup>5</sup></code></li>
	<li>There will be at least one element in the data structure before calling <code>findMedian</code>.</li>
	<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
	<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>
</ul>
</div></div>

**Related Topics**:  
[Heap](https://leetcode.com/tag/heap/), [Design](https://leetcode.com/tag/design/)

**Similar Questions**:

- [Sliding Window Median (Hard)](https://leetcode.com/problems/sliding-window-median/)

---

Great question! Let me break down the `Heap` class for you step-by-step.

### 🧠 What is a Heap?

A **heap** is a special tree-based data structure that satisfies the **heap property**:

- **Min-heap**: parent ≤ children (the smallest value is at the top)
- **Max-heap**: parent ≥ children (the largest value is at the top)

Heaps are often implemented as **arrays**, where:

- Parent of node at index `i` is at `Math.floor((i - 1) / 2)`
- Left child is at `2 * i + 1`
- Right child is at `2 * i + 2`

---

### 📦 The `Heap` Class Breakdown

```js
class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }
```

- `data`: an array that stores the heap elements.
- `compare`: a function that determines the ordering:

  - For min-heap: `(a, b) => a < b`
  - For max-heap: `(a, b) => a > b`

#### ➕ `push(val)`: insert a new number into the heap

```js
push(val) {
  this.data.push(val);
  this._bubbleUp(this.size() - 1);
}
```

- Adds the number to the end of the array.
- Then restores the heap property using `_bubbleUp`.

#### 🔼 `_bubbleUp(index)`: make the new number go **up** if necessary

```js
_bubbleUp(index) {
  const element = this.data[index];
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.data[parentIndex];
    if (this.compare(element, parent)) {
      this.data[index] = parent;
      index = parentIndex;
    } else break;
  }
  this.data[index] = element;
}
```

- Keeps swapping the current element with its parent **while** the heap condition is violated.

#### 🔽 `_bubbleDown(index)`: make the top number go **down** if necessary

```js
_bubbleDown(index) {
  const length = this.size();
  const element = this.data[index];

  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let swap = index;

    if (left < length && this.compare(this.data[left], this.data[swap])) {
      swap = left;
    }

    if (right < length && this.compare(this.data[right], this.data[swap])) {
      swap = right;
    }

    if (swap === index) break;

    this.data[index] = this.data[swap];
    index = swap;
  }
  this.data[index] = element;
}
```

- Swaps the current node with its smallest/largest child (based on `compare`) until the heap is valid again.

#### 🧹 `pop()`: remove and return the top of the heap

```js
pop() {
  const top = this.peek();
  const bottom = this.data.pop();
  if (this.size()) {
    this.data[0] = bottom;
    this._bubbleDown(0);
  }
  return top;
}
```

- Removes the root (top of the heap).
- Replaces it with the last element.
- Then `_bubbleDown` to restore the heap.

#### 👀 `peek()`: get the top value without removing it

```js
peek() {
  return this.data[0];
}
```

#### 🔢 `size()`: how many elements are in the heap

```js
size() {
  return this.data.length;
}
```

---

### 🛠️ Summary

- `Heap` is a **general-purpose heap** that works as min-heap or max-heap based on the comparison function.
- We use two `Heap`s in the `MedianFinder`:

  - One max-heap for the smaller half of the data.
  - One min-heap for the larger half.

Would you like a visual example of how the heaps evolve as numbers are added?

---

Absolutely! Let's **zoom in** on the `_bubbleUp` method — it's the heart of how a heap stays **ordered** when a new element is added.

---

### 🎯 Purpose of `_bubbleUp`

When you add a number to a heap, it goes at the **end** of the array (bottom of the tree). But that might **break the heap property**.

- For a **min-heap**, every parent should be smaller than or equal to its children.
- For a **max-heap**, every parent should be larger than or equal to its children.

`_bubbleUp` **moves** the newly added element **up the tree** until the heap property is restored.

---

### 🧱 How It Works — Step by Step

Here's the method again:

```js
_bubbleUp(index) {
  const element = this.data[index];
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.data[parentIndex];

    if (this.compare(element, parent)) {
      this.data[index] = parent;
      index = parentIndex;
    } else break;
  }
  this.data[index] = element;
}
```

#### Step-by-step explanation:

1. **Start at the index** of the newly added element.
2. **Get its parent**:

   ```js
   const parentIndex = Math.floor((index - 1) / 2);
   ```

3. Use the `compare` function (e.g., `a > b` for max-heap, or `a < b` for min-heap) to check:

   - Does the new element **violate** the heap rule with its parent?

4. If **yes**, **swap** it with the parent, and **repeat** the process up the tree.
5. Once the element is in a valid spot, **stop**.

---

### 📊 Example – Max-Heap

Let’s walk through adding `15` to a max-heap:

```js
heap.data = [50, 30, 40, 10, 5]; // a valid max-heap
heap.push(15); // add at the end
```

Now `data = [50, 30, 40, 10, 5, 15]`

- `15` is at index 5.
- Parent of index 5 is at index 2 (`40`)
- Compare: `15 > 40`? ❌ No → heap is fine → stop.

But suppose you added `60`:

```js
heap.push(60);
```

Now `data = [50, 30, 40, 10, 5, 15, 60]`

- `60` is at index 6.
- Parent is `40` at index 2.
- `60 > 40` ✅ → Swap them → now `60` is at index 2.
- New parent is `50` at index 0.
- `60 > 50` ✅ → Swap again.
- Now `60` is at the top → done.

Final array: `[60, 30, 50, 10, 5, 15, 40]`

---

### 📌 Why Use `compare` Function?

The `Heap` class uses a flexible comparison so you can reuse it for both:

- `compare = (a, b) => a < b` → min-heap
- `compare = (a, b) => a > b` → max-heap

So `_bubbleUp` uses:

```js
if (this.compare(element, parent))
```

to **generalize** for both heap types.

---

Would you like a step-by-step diagram for a min-heap version too?

---

Absolutely! Let’s now dive deep into the `_bubbleDown` method, which is the **counterpart** to `_bubbleUp`.

---

## 🧠 Purpose of `_bubbleDown`

When you **remove** the root (top element) from a heap using `pop()`, you replace it with the **last element** in the array. This can break the heap property.

- `_bubbleDown` is used to **restore** the heap property by moving the new root **down** the tree until it's in the correct position.

---

## 🔧 The `_bubbleDown` Method

Here’s the method again:

```js
_bubbleDown(index) {
  const length = this.size();
  const element = this.data[index];

  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let swap = index;

    if (left < length && this.compare(this.data[left], this.data[swap])) {
      swap = left;
    }

    if (right < length && this.compare(this.data[right], this.data[swap])) {
      swap = right;
    }

    if (swap === index) break;

    this.data[index] = this.data[swap];
    index = swap;
  }

  this.data[index] = element;
}
```

---

## 🧱 Step-by-step Breakdown

Let’s say we’re working with a **min-heap** (so `compare(a, b) => a < b`):

1. `element` is the node we want to bubble down (usually the root).
2. Compute the **left and right child** indices.
3. Compare the `element` with its children:

   - If **either child is smaller**, swap `element` with the **smallest** one.

4. Repeat this process **until the element is smaller than both children**, or it reaches a leaf node.

---

## 🧪 Example (Min-Heap)

Start with this min-heap:

```
     1
   /   \
  3     5
 / \   /
4   8 6
```

Array: `[1, 3, 5, 4, 8, 6]`

Now we `pop()` the root (`1`). Replace it with the last element (`6`):

Intermediate array: `[6, 3, 5, 4, 8]`

Now we `_bubbleDown` from index 0 (value `6`):

1. Left = 3 (index 1), Right = 5 (index 2)
2. Compare:

   - Is `3 < 6`? ✅
   - Is `5 < 3`? ❌

3. Swap `6` with `3`

Array becomes: `[3, 6, 5, 4, 8]`

Continue at index 1 (value `6`):

1. Left = 4 (index 3), Right = 8 (index 4)
2. Compare:

   - Is `4 < 6`? ✅
   - Is `8 < 4`? ❌

3. Swap `6` with `4`

Final array: `[3, 4, 5, 6, 8]`

✅ Now it’s a valid min-heap again.

---

## 🔁 Works for Max-Heap Too

If you use `compare = (a, b) => a > b`, `_bubbleDown` will push large elements down until the **biggest** is at the top — making it a **max-heap**.

---

## 🔄 Summary

- `_bubbleDown` is used after **removing the root** of the heap.
- It **moves the replacement element down** the tree until it fits.
- It ensures the **heap property is restored**.
- It compares the current node with its children and **swaps** with the best one based on the heap type.

---

Would you like a visual diagram or animation of this process?

---

This solution to **LeetCode 295. Find Median from Data Stream** uses a **sorted array + binary search** to maintain the data in order and compute the median efficiently.

Let’s break it down step-by-step:

---

### ✅ 1. Initialization

```js
var MedianFinder = function () {
  this.arr = [];
};
```

- The `MedianFinder` class uses a **simple array** (`this.arr`) to store all numbers added so far.
- This array will be **kept sorted** at all times using **binary search insertion**.

---

### ✅ 2. Adding a number

```js
MedianFinder.prototype.addNum = function (num) {
  const bs = (n) => {
    let start = 0;
    let end = this.arr.length;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (n > this.arr[mid]) start = mid + 1;
      else end = mid;
    }

    this.arr.splice(start, 0, n);
  };

  if (this.arr.length === 0) this.arr.push(num);
  else bs(num);
};
```

- If the array is empty, simply insert the first number.
- Otherwise, insert `num` using **binary search (bs)** to find the correct index (`start`) where `num` should be inserted to maintain sorted order.
- After finding the position, `this.arr.splice(start, 0, n)` inserts `num` at that index, shifting the rest to the right.

#### ⚙ Binary Search Logic:

This line:

```js
if (n > this.arr[mid]) start = mid + 1;
else end = mid;
```

is used to find the **first index where `n <= this.arr[index]`**, which is the insertion point for `n`.

**Time complexity**:

- Binary search takes `O(log n)`
- `splice()` to insert in the middle of an array takes `O(n)` (worst case).

So overall, `addNum()` is **O(n)** time due to the insertion.

---

### ✅ 3. Finding the median

```js
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.arr.length / 2);
  return this.arr.length % 2 === 0 ? (this.arr[mid - 1] + this.arr[mid]) / 2 : this.arr[mid];
};
```

- If the array has odd length → return the middle element.
- If even length → return the average of the two middle elements.

Since the array is always **sorted**, this is a **constant time operation: O(1)**.

---

### 🔁 Example

```js
let mf = new MedianFinder();
mf.addNum(3); // [3]
mf.addNum(1); // [1,3]
mf.addNum(2); // [1,2,3]
mf.findMedian(); // 2
```

---

### ✅ Summary

| Operation      | Time Complexity          |
| -------------- | ------------------------ |
| `addNum()`     | O(n) (because of splice) |
| `findMedian()` | O(1)                     |

---

### 🚫 Downsides

- **Inefficient for large streams** (because of `O(n)` insertion).
- Not suitable for **online median** problems with many frequent inserts.

---

### ✅ Better Alternative

For real-time median calculation with many updates, a **two-heap solution** (minHeap + maxHeap) gives:

- `addNum()` → O(log n)
- `findMedian()` → O(1)

Let me know if you’d like to compare both implementations or run performance tests.
