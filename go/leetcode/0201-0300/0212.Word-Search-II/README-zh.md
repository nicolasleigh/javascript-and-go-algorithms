# [212. 单词搜索 II](https://leetcode.cn/problems/word-search-ii/)

<div><div class="elfjS" data-track-load="description_content"><p>给定一个&nbsp;<code>m x n</code> 二维字符网格&nbsp;<code>board</code><strong>&nbsp;</strong>和一个单词（字符串）列表 <code>words</code>，&nbsp;<em>返回所有二维网格上的单词</em>&nbsp;。</p>

<p>单词必须按照字母顺序，通过 <strong>相邻的单元格</strong> 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/07/search1.jpg">
<pre><strong>输入：</strong>board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
<strong>输出：</strong>["eat","oath"]
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/07/search2.jpg">
<pre><strong>输入：</strong>board = [["a","b"],["c","d"]], words = ["abcb"]
<strong>输出：</strong>[]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 12</code></li>
	<li><code>board[i][j]</code> 是一个小写英文字母</li>
	<li><code>1 &lt;= words.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words[i].length &lt;= 10</code></li>
	<li><code>words[i]</code> 由小写英文字母组成</li>
	<li><code>words</code> 中的所有字符串互不相同</li>
</ul>
</div></div>
