# [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)
<div><div class="elfjS" data-track-load="description_content"><p>给你一个整数数组 <code>coins</code> ，表示不同面额的硬币；以及一个整数 <code>amount</code> ，表示总金额。</p>

<p>计算并返回可以凑成总金额所需的 <strong>最少的硬币个数</strong> 。如果没有任何一种硬币组合能组成总金额，返回&nbsp;<code>-1</code> 。</p>

<p>你可以认为每种硬币的数量是无限的。</p>

<p>&nbsp;</p>

<p><strong>示例&nbsp;1：</strong></p>

<pre><strong>输入：</strong>coins = <code>[1, 2, 5]</code>, amount = <code>11</code>
<strong>输出：</strong><code>3</code> 
<strong>解释：</strong>11 = 5 + 5 + 1</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>coins = <code>[2]</code>, amount = <code>3</code>
<strong>输出：</strong>-1</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>coins = [1], amount = 0
<strong>输出：</strong>0
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 12</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>
</ul>
</div></div>