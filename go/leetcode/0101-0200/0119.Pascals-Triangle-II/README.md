# [119. Pascal's Triangle II (Easy)](https://leetcode.com/problems/pascals-triangle-ii)

<p>Given an integer <code>rowIndex</code>, return the <code>rowIndex<sup>th</sup></code> (<strong>0-indexed</strong>) row of the <strong>Pascal&#39;s triangle</strong>.</p>

<p>In <strong>Pascal&#39;s triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p>
<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px" />
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> rowIndex = 3
<strong>Output:</strong> [1,3,3,1]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> rowIndex = 0
<strong>Output:</strong> [1]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> rowIndex = 1
<strong>Output:</strong> [1,1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= rowIndex &lt;= 33</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you optimize your algorithm to use only <code>O(rowIndex)</code> extra space?</p>

**Companies**:
[Amazon](https://leetcode.com/company/amazon), [Goldman Sachs](https://leetcode.com/company/goldman-sachs), [Microsoft](https://leetcode.com/company/microsoft), [Yahoo](https://leetcode.com/company/yahoo)

**Related Topics**:  
[Array](https://leetcode.com/tag/array), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming)

**Similar Questions**:

- [Pascal's Triangle (Easy)](https://leetcode.com/problems/pascals-triangle)
- [Find Triangular Sum of an Array (Medium)](https://leetcode.com/problems/find-triangular-sum-of-an-array)

---

### How Solution 2 works:

Only one array (row) is used.

Updates happen right-to-left in each iteration to prevent overwriting values that are still needed for the current row computation.

For example, to compute row 4:

```css
[1, 0, 0, 0, 0]
→ [1, 1, 0, 0, 0]
→ [1, 2, 1, 0, 0]
→ [1, 3, 3, 1, 0]
→ [1, 4, 6, 4, 1]
```
