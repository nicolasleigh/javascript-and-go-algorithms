# [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/description/)

<div><div class="elfjS" data-track-load="description_content"><p>给你一个整数数组 <code>coins</code> 表示不同面额的硬币，另给一个整数 <code>amount</code> 表示总金额。</p>

<p>请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 <code>0</code> 。</p>

<p>假设每一种面额的硬币有无限个。&nbsp;</p>

<p>题目数据保证结果符合 32 位带符号整数。</p>

<p>&nbsp;</p>

<ul>
</ul>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>amount = 5, coins = [1, 2, 5]
<strong>输出：</strong>4
<strong>解释：</strong>有四种方式可以凑成总金额：
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>amount = 3, coins = [2]
<strong>输出：</strong>0
<strong>解释：</strong>只用面额 2 的硬币不能凑成总金额 3 。
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>amount = 10, coins = [10] 
<strong>输出：</strong>1
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 300</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 5000</code></li>
	<li><code>coins</code> 中的所有值 <strong>互不相同</strong></li>
	<li><code>0 &lt;= amount &lt;= 5000</code></li>
</ul>
</div></div>
