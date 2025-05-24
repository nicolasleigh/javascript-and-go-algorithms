# [399. Evaluate Division (Medium)](https://leetcode.com/problems/evaluate-division/)

<p>You are given <code>equations</code>&nbsp;in the format <code>A / B = k</code>, where <code>A</code> and <code>B</code> are variables represented as strings, and <code>k</code> is a real number (floating-point number). Given some <code>queries</code>, return <em>the answers</em>. If the answer does not exist, return <code>-1.0</code>.</p>

<p>The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
<strong>Output:</strong> [6.00000,0.50000,-1.00000,1.00000,-1.00000]
<strong>Explanation:</strong> 
Given: <em>a / b = 2.0</em>, <em>b / c = 3.0</em>
queries are: <em>a / c = ?</em>, <em>b / a = ?</em>, <em>a / e = ?</em>, <em>a / a = ?</em>, <em>x / x = ?</em>
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
<strong>Output:</strong> [3.75000,0.40000,5.00000,0.20000]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
<strong>Output:</strong> [0.50000,2.00000,-1.00000,-1.00000]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= equations.length &lt;= 20</code></li>
	<li><code>equations[i].length == 2</code></li>
	<li><code>1 &lt;= equations[i][0], equations[i][1] &lt;= 5</code></li>
	<li><code>values.length ==&nbsp;equations.length</code></li>
	<li><code>0.0 &lt;&nbsp;values[i] &lt;= 20.0</code></li>
	<li><code>1 &lt;= queries.length &lt;= 20</code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>1 &lt;= queries[i][0], queries[i][1] &lt;= 5</code></li>
	<li><code>equations[i][0], equations[i][1],&nbsp;queries[i][0], queries[i][1]</code>&nbsp;consist of lower case English letters and digits.</li>
</ul>

**Related Topics**:  
[Union Find](https://leetcode.com/tag/union-find/), [Graph](https://leetcode.com/tag/graph/)
