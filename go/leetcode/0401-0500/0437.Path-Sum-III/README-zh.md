# [437. 路径总和 III](https://leetcode.cn/problems/path-sum-iii/)

<div><div class="elfjS" data-track-load="description_content"><p>给定一个二叉树的根节点 <code>root</code>&nbsp;，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p>

<p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" style="width: 452px;"></p>

<pre><strong>输入：</strong>root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
<strong>输出：</strong>3
<strong>解释：</strong>和等于 8 的路径有 3 条，如图所示。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>输出：</strong>3
</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li>二叉树的节点个数的范围是 <code>[0,1000]</code></li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= Node.val &lt;= 10<sup>9</sup></code>&nbsp;</li>
	<li><code>-1000&nbsp;&lt;= targetSum&nbsp;&lt;= 1000</code>&nbsp;</li>
</ul>
</div></div>
