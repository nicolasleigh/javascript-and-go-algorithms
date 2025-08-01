# [278. 第一个错误的版本](https://leetcode.cn/problems/first-bad-version/)

<div><div class="elfjS" data-track-load="description_content"><p>你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。</p>

<p>假设你有 <code>n</code> 个版本 <code>[1, 2, ..., n]</code>，你想找出导致之后所有版本出错的第一个错误的版本。</p>

<p>你可以通过调用&nbsp;<code>bool isBadVersion(version)</code>&nbsp;接口来判断版本号 <code>version</code> 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。</p>
&nbsp;

<p><strong class="example">示例 1：</strong></p>

<pre><strong>输入：</strong>n = 5, bad = 4
<strong>输出：</strong>4
<strong>解释：</strong>
<code>调用 isBadVersion(3) -&gt; false 
调用 isBadVersion(5)&nbsp;-&gt; true 
调用 isBadVersion(4)&nbsp;-&gt; true</code>
<code>所以，4 是第一个错误的版本。</code>
</pre>

<p><strong class="example">示例 2：</strong></p>

<pre><strong>输入：</strong>n = 1, bad = 1
<strong>输出：</strong>1
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= bad &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div></div>
