# [92. Reverse Linked List II (Medium)](https://leetcode.com/problems/reverse-linked-list-ii/)

<p>Given the <code>head</code> of a singly linked list and two integers <code>left</code> and <code>right</code> where <code>left &lt;= right</code>, reverse the nodes of the list from position <code>left</code> to position <code>right</code>, and return <em>the reversed list</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg" style="width: 542px; height: 222px;">
<pre><strong>Input:</strong> head = [1,2,3,4,5], left = 2, right = 4
<strong>Output:</strong> [1,4,3,2,5]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> head = [5], left = 1, right = 1
<strong>Output:</strong> [5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>-500 &lt;= Node.val &lt;= 500</code></li>
	<li><code>1 &lt;= left &lt;= right &lt;= n</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you do it in one pass?

**Companies**:  
[Microsoft](https://leetcode.com/company/microsoft), [Amazon](https://leetcode.com/company/amazon), [Facebook](https://leetcode.com/company/facebook), [Bloomberg](https://leetcode.com/company/bloomberg)

**Related Topics**:  
[Linked List](https://leetcode.com/tag/linked-list/)

**Similar Questions**:

- [Reverse Linked List (Easy)](https://leetcode.com/problems/reverse-linked-list/)

---

Certainly! The **"head insertion"** technique is a clever in-place way to reverse a part of a linked list by **repeatedly moving the next node after `cur` to the front of the sublist** — right after the `pre` node. Let’s break it down visually and step by step.

---

### 🧠 Setup:

* `pre` points to the node **before the reversal** starts.
* `cur` points to the **first node to be reversed** (i.e., position `left`).

### 🔄 Head Insertion Loop:

```js
for (let i = 0; i < right - left; i++) {
    let tmp = pre.next;
    pre.next = cur.next;
    cur.next = cur.next.next;
    pre.next.next = tmp;
}
```

### 🔧 What each line does:

Let’s assume we're reversing the part `[left, right]` in the list. Here's what each line does:

```js
let tmp = pre.next;
```

* Store the current front of the reversed part.

```js
pre.next = cur.next;
```

* Move the node after `cur` (i.e., `cur.next`) to the front of the sublist.

```js
cur.next = cur.next.next;
```

* Skip the moved node from `cur`'s perspective (i.e., detach it from its original position).

```js
pre.next.next = tmp;
```

* Connect the moved node's `.next` to the old front of the reversed part (stored in `tmp`).
