# [374. 猜数字大小](https://leetcode.cn/problems/guess-number-higher-or-lower/)

<div><div class="elfjS" data-track-load="description_content"><p>我们正在玩猜数字游戏。猜数字游戏的规则如下：</p>

<p>我会从&nbsp;<code>1</code>&nbsp;到&nbsp;<code>n</code> 随机选择一个数字。 请你猜选出的是哪个数字。</p>

<p>如果你猜错了，我会告诉你，我选出的数字比你猜测的数字大了还是小了。</p>

<p>你可以通过调用一个预先定义好的接口 <code>int guess(int num)</code> 来获取猜测结果，返回值一共有三种可能的情况：</p>

<ul>
	<li><code>-1</code>：你猜的数字比我选出的数字大 （即&nbsp;<code>num &gt; pick</code>）。</li>
	<li><code>1</code>：你猜的数字比我选出的数字小&nbsp;（即&nbsp;<code>num &lt;&nbsp;pick</code>）。</li>
	<li><code>0</code>：你猜的数字与我选出的数字相等。（即&nbsp;<code>num&nbsp;== pick</code>）。</li>
</ul>

<p>返回我选出的数字。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>n = 10, pick = 6
<strong>输出：</strong>6
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>n = 1, pick = 1
<strong>输出：</strong>1
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>n = 2, pick = 1
<strong>输出：</strong>1
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>1 &lt;= pick &lt;= n</code></li>
</ul>
</div></div>
