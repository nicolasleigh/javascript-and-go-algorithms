# [135. 分发糖果](https://leetcode.cn/problems/candy/)

<div><div class="elfjS" data-track-load="description_content"><p><code>n</code> 个孩子站成一排。给你一个整数数组 <code>ratings</code> 表示每个孩子的评分。</p>

<p>你需要按照以下要求，给这些孩子分发糖果：</p>

<ul>
	<li>每个孩子至少分配到 <code>1</code> 个糖果。</li>
	<li>相邻两个孩子评分更高的孩子会获得更多的糖果。</li>
</ul>

<p>请你给每个孩子分发糖果，计算并返回需要准备的 <strong>最少糖果数目</strong> 。</p>

<p>&nbsp;</p>

<p><strong>示例&nbsp;1：</strong></p>

<pre><strong>输入：</strong>ratings = [1,0,2]
<strong>输出：</strong>5
<strong>解释：</strong>你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入：</strong>ratings = [1,2,2]
<strong>输出：</strong>4
<strong>解释：</strong>你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>n == ratings.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= ratings[i] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>
</div></div>
