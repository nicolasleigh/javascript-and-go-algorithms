# [701. 二叉搜索树中的插入操作](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

<div><div class="elfjS" data-track-load="description_content"><p>给定二叉搜索树（BST）的根节点&nbsp;<code>root</code>&nbsp;和要插入树中的值&nbsp;<code>value</code>&nbsp;，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 <strong>保证</strong> ，新值和原始二叉搜索树中的任意节点值都不同。</p>

<p><strong>注意</strong>，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 <strong>任意有效的结果</strong> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/insertbst.jpg">
<pre><strong>输入：</strong>root = [4,2,7,1,3], val = 5
<strong>输出：</strong>[4,2,7,1,3,5]
<strong>解释：</strong>另一个满足题目要求可以通过的树是：
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/bst.jpg">
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>root = [40,20,60,10,30,50,70], val = 25
<strong>输出：</strong>[40,20,60,10,30,50,70,null,null,25]
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
<strong>输出：</strong>[4,2,7,1,3,5]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中的节点数将在&nbsp;<code>[0,&nbsp;10<sup>4</sup>]</code>的范围内。</li>
	<li><code>-10<sup>8</sup>&nbsp;&lt;= Node.val &lt;= 10<sup>8</sup></code></li>
	<li>所有值&nbsp;<code>Node.val</code>&nbsp;是&nbsp;<strong>独一无二</strong>&nbsp;的。</li>
	<li><code>-10<sup>8</sup>&nbsp;&lt;= val &lt;= 10<sup>8</sup></code></li>
	<li><strong>保证</strong>&nbsp;<code>val</code>&nbsp;在原始BST中不存在。</li>
</ul>
</div></div>
