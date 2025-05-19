# [138. Copy List with Random Pointer (Medium)](https://leetcode.com/problems/copy-list-with-random-pointer)

<p>A linked list of length <code>n</code> is given such that each node contains an additional random pointer, which could point to any node in the list, or <code>null</code>.</p>
<p>Construct a <a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank"><strong>deep copy</strong></a> of the list. The deep copy should consist of exactly <code>n</code> <strong>brand new</strong> nodes, where each new node has its value set to the value of its corresponding original node. Both the <code>next</code> and <code>random</code> pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. <strong>None of the pointers in the new list should point to nodes in the original list</strong>.</p>
<p>For example, if there are two nodes <code>X</code> and <code>Y</code> in the original list, where <code>X.random --&gt; Y</code>, then for the corresponding two nodes <code>x</code> and <code>y</code> in the copied list, <code>x.random --&gt; y</code>.</p>
<p>Return <em>the head of the copied linked list</em>.</p>
<p>The linked list is represented in the input/output as a list of <code>n</code> nodes. Each node is represented as a pair of <code>[val, random_index]</code> where:</p>
<ul>
	<li><code>val</code>: an integer representing <code>Node.val</code></li>
	<li><code>random_index</code>: the index of the node (range from <code>0</code> to <code>n-1</code>) that the <code>random</code> pointer points to, or <code>null</code> if it does not point to any node.</li>
</ul>
<p>Your code will <strong>only</strong> be given the <code>head</code> of the original linked list.</p>
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/e1.png" style="width: 700px; height: 142px;">
<pre><strong>Input:</strong> head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
<strong>Output:</strong> [[7,null],[13,0],[11,4],[10,2],[1,0]]
</pre>
<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/e2.png" style="width: 700px; height: 114px;">
<pre><strong>Input:</strong> head = [[1,1],[2,1]]
<strong>Output:</strong> [[1,1],[2,1]]
</pre>
<p><strong class="example">Example 3:</strong></p>
<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/e3.png" style="width: 700px; height: 122px;"></strong></p>
<pre><strong>Input:</strong> head = [[3,null],[3,0],[3,null]]
<strong>Output:</strong> [[3,null],[3,0],[3,null]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>
<ul>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
	<li><code>Node.random</code> is <code>null</code> or is pointing to some node in the linked list.</li>
</ul>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Facebook](https://leetcode.com/company/facebook), [Apple](https://leetcode.com/company/apple)

**Related Topics**:  
[Hash Table](https://leetcode.com/tag/hash-table/), [Linked List](https://leetcode.com/tag/linked-list/)

**Similar Questions**:

- [Clone Graph (Medium)](https://leetcode.com/problems/clone-graph/)
- [Clone Binary Tree With Random Pointer (Medium)](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/)
- [Clone N-ary Tree (Medium)](https://leetcode.com/problems/clone-n-ary-tree/)

---

Great question!

```js
originalToClone.set(null, null);
```

### 💡 Why is this line needed?

This line is a **convenience** to avoid writing extra `null` checks later in the code.

Let’s look at this part of the second pass:

```js
clone.next = originalToClone.get(current.next);
clone.random = originalToClone.get(current.random);
```

Here, `current.next` or `current.random` might be `null`. If so, we want `clone.next` or `clone.random` to also be `null`.

Without this line, doing `originalToClone.get(null)` would return `undefined`, and you'd have to write extra checks like:

```js
clone.next = current.next ? originalToClone.get(current.next) : null;
clone.random = current.random ? originalToClone.get(current.random) : null;
```

By doing:

```js
originalToClone.set(null, null);
```

you’re essentially saying:

> "If I try to get the clone of a `null` node, just give me `null` back."

### ✅ Benefits

- Makes the code cleaner and shorter.
- Avoids unnecessary null-checks.
- Makes `originalToClone.get(...)` always safe to use.

Let me know if you want to see a version with and without it side by side.
