# [86. Partition List (Medium)](https://leetcode.com/problems/partition-list/)

<p>Given the <code>head</code> of a linked list and a value <code>x</code>, partition it such that all nodes <strong>less than</strong> <code>x</code> come before nodes <strong>greater than or equal</strong> to <code>x</code>.</p>

<p>You should <strong>preserve</strong> the original relative order of the nodes in each of the two partitions.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/partition.jpg" style="width: 662px; height: 222px;">
<pre><strong>Input:</strong> head = [1,4,3,2,5,2], x = 3
<strong>Output:</strong> [1,2,2,4,3,5]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> head = [2,1], x = 2
<strong>Output:</strong> [1,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 200]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li><code>-200 &lt;= x &lt;= 200</code></li>
</ul>

**Related Topics**:  
[Linked List](https://leetcode.com/tag/linked-list/), [Two Pointers](https://leetcode.com/tag/two-pointers/)

**Similar Questions**:

- [Partition Array According to Given Pivot (Medium)](https://leetcode.com/problems/partition-array-according-to-given-pivot/)

---

Great question — **no**, you **cannot** safely combine:

```js
let beforeHead = new ListNode(0);
let before = beforeHead;
```

into just:

```js
let before = new ListNode(0);
```

**Why not?**

Because you would lose the **head reference** of the list.

### 🔍 Explanation:

When you do:

```js
let beforeHead = new ListNode(0);
let before = beforeHead;
```

- `beforeHead` always points to the **start** of the "before" list.
- `before` is a moving pointer that you advance as you build the list.

Then at the end, you return:

```js
return beforeHead.next;
```

So you **need** the `beforeHead` pointer to return the head of the constructed list.

If you did only:

```js
let before = new ListNode(0);
```

Then `before` moves forward as you append nodes — and you **no longer have a reference to the head** of the list you’re building.

---

### ✅ TL;DR:

Keep both `beforeHead` and `before`:

- `beforeHead`: fixed dummy node to return the result.
- `before`: movable pointer for building the list.

Same applies for `afterHead` and `after`.

Let me know if you'd like a diagram!
