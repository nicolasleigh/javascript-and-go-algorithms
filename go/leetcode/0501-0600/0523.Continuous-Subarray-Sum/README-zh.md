# [523. 连续的子数组和](https://leetcode.cn/problems/continuous-subarray-sum/)

<div><div class="elfjS" data-track-load="description_content"><p>给你一个整数数组 <code>nums</code> 和一个整数&nbsp;<code>k</code> ，如果&nbsp;<code>nums</code>&nbsp;有一个 <strong>好的子数组</strong>&nbsp;返回&nbsp;<code>true</code>&nbsp;，否则返回 <code>false</code>：</p>

<p>一个&nbsp;<strong>好的子数组</strong>&nbsp;是：</p>

<ul>
	<li>长度&nbsp;<strong>至少为 2</strong> ，且</li>
	<li>子数组元素总和为 <code>k</code> 的倍数。</li>
</ul>

<p><strong>注意</strong>：</p>

<ul>
	<li><strong>子数组</strong> 是数组中 <strong>连续</strong> 的部分。</li>
	<li>如果存在一个整数 <code>n</code> ，令整数 <code>x</code> 符合 <code>x = n * k</code> ，则称 <code>x</code> 是 <code>k</code> 的一个倍数。<code>0</code> <strong>始终</strong> 视为 <code>k</code> 的一个倍数。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>nums = [23<u>,2,4</u>,6,7], k = 6
<strong>输出：</strong>true
<strong>解释：</strong>[2,4] 是一个大小为 2 的子数组，并且和为 6 。</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>nums = [<u>23,2,6,4,7</u>], k = 6
<strong>输出：</strong>true
<strong>解释：</strong>[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>nums = [23,2,6,4,7], k = 13
<strong>输出：</strong>false
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= sum(nums[i]) &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>1 &lt;= k &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div>
