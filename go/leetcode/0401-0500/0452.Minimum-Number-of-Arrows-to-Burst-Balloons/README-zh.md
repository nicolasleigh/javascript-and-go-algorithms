# [452. 用最少数量的箭引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

<div><div class="elfjS" data-track-load="description_content"><p>有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组&nbsp;<code>points</code>&nbsp;，其中<code>points[i] = [x<sub>start</sub>, x<sub>end</sub>]</code>&nbsp;表示水平直径在&nbsp;<code>x<sub>start</sub></code>&nbsp;和&nbsp;<code>x<sub>end</sub></code>之间的气球。你不知道气球的确切 y 坐标。</p>

<p>一支弓箭可以沿着 x 轴从不同点 <strong>完全垂直</strong> 地射出。在坐标 <code>x</code> 处射出一支箭，若有一个气球的直径的开始和结束坐标为 <code>x</code><sub><code>start</code>，</sub><code>x</code><sub><code>end</code>，</sub> 且满足 &nbsp;<code>x<sub>start</sub>&nbsp;≤ x ≤ x</code><sub><code>end</code>，</sub>则该气球会被 <strong>引爆</strong>&nbsp;<sub>。</sub>可以射出的弓箭的数量 <strong>没有限制</strong> 。 弓箭一旦被射出之后，可以无限地前进。</p>

<p>给你一个数组 <code>points</code> ，<em>返回引爆所有气球所必须射出的 <strong>最小</strong> 弓箭数&nbsp;</em>。</p>
&nbsp;

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>points = [[10,16],[2,8],[1,6],[7,12]]
<strong>输出：</strong>2
<strong>解释：</strong>气球可以用2支箭来爆破:
-在x = 6处射出箭，击破气球[2,8]和[1,6]。
-在x = 11处发射箭，击破气球[10,16]和[7,12]。</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>points = [[1,2],[3,4],[5,6],[7,8]]
<strong>输出：</strong>4
<strong>解释：</strong>每个气球需要射出一支箭，总共需要4支箭。</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>points = [[1,2],[2,3],[3,4],[4,5]]
<strong>输出：</strong>2
解释：气球可以用2支箭来爆破:
- 在x = 2处发射箭，击破气球[1,2]和[2,3]。
- 在x = 4处射出箭，击破气球[3,4]和[4,5]。</pre>

<p>&nbsp;</p>

<p></p>

<p><strong>提示:</strong></p>

<ul>
	<li><code>1 &lt;= points.length &lt;= 10<sup>5</sup></code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x<sub>start</sub>&nbsp;&lt; x<sub>end</sub>&nbsp;&lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>
</div></div>
