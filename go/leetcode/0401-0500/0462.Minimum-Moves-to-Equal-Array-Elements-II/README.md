# [462. Minimum Moves to Equal Array Elements II (Medium)](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)

<p>Given an integer array <code>nums</code> of size <code>n</code>, return <em>the minimum number of moves required to make all array elements equal</em>.</p>

<p>In one move, you can increment or decrement an element of the array by <code>1</code>.</p>

<p>Test cases are designed so that the answer will fit in a <strong>32-bit</strong> integer.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
Only two moves are needed (remember each move increments or decrements one element):
[<u>1</u>,2,3]  =&gt;  [2,2,<u>3</u>]  =&gt;  [2,2,2]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,10,2,9]
<strong>Output:</strong> 16
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Math](https://leetcode.com/tag/math/), [Sorting](https://leetcode.com/tag/sorting/)

**Similar Questions**:

- [Best Meeting Point (Hard)](https://leetcode.com/problems/best-meeting-point/)
- [Minimum Moves to Equal Array Elements (Medium)](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/)
- [Minimum Operations to Make a Uni-Value Grid (Medium)](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/)
- [Removing Minimum Number of Magic Beans (Medium)](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/)
