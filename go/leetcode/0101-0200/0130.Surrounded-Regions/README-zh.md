# [130. 被围绕的区域](https://leetcode.cn/problems/surrounded-regions/)

<div><div class="elfjS" data-track-load="description_content"><p>给你一个 <code>m x n</code> 的矩阵 <code>board</code> ，由若干字符 <code>'X'</code> 和 <code>'O'</code>&nbsp;组成，<strong>捕获</strong> 所有 <strong>被围绕的区域</strong>：</p>

<ul>
	<li><strong>连接：</strong>一个单元格与水平或垂直方向上相邻的单元格连接。</li>
	<li><strong>区域：连接所有&nbsp;</strong><code>'O'</code>&nbsp;的单元格来形成一个区域。</li>
	<li><strong>围绕：</strong>如果您可以用&nbsp;<code>'X'</code>&nbsp;单元格 <strong>连接这个区域</strong>，并且区域中没有任何单元格位于&nbsp;<code>board</code> 边缘，则该区域被 <code>'X'</code>&nbsp;单元格围绕。</li>
</ul>

<p>通过 <strong>原地</strong>&nbsp;将输入矩阵中的所有 <code>'O'</code>&nbsp;替换为 <code>'X'</code> 来 <strong>捕获被围绕的区域</strong>。你不需要返回任何值。</p>

<div class="original__bRMd">
<div>
<p>&nbsp;</p>

<p><strong class="example">示例 1：</strong></p>

<div class="example-block">
<p><strong>输入：</strong><span class="example-io">board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]</span></p>

<p><b>输出：</b><span class="example-io">[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]</span></p>

<p><strong>解释：</strong></p>
<img alt="" src="https://pic.leetcode.cn/1718167191-XNjUTG-image.png" style="width: 367px; height: 158px;">
<p>在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。</p>
</div>

<p><strong class="example">示例 2：</strong></p>

<div class="example-block">
<p><strong>输入：</strong><span class="example-io">board = [["X"]]</span></p>

<p><strong>输出：</strong><span class="example-io">[["X"]]</span></p>
</div>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>board[i][j]</code> 为 <code>'X'</code> 或 <code>'O'</code></li>
</ul>
</div>
</div>
</div></div>
