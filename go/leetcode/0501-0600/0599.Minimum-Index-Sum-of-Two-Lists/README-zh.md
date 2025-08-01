# [599. 两个列表的最小索引总和](https://leetcode.cn/problems/minimum-index-sum-of-two-lists/)

<div><div class="elfjS" data-track-load="description_content"><p>给定两个字符串数组&nbsp;<code>list1</code> 和 <code>list2</code>，找到 <strong>索引和最小的公共字符串</strong>。</p>

<p><strong>公共字符串</strong>&nbsp;是同时出现在&nbsp;<code>list1</code> 和 <code>list2</code>&nbsp;中的字符串。</p>

<p>具有 <strong>最小索引和的公共字符串</strong> 是指，如果它在 <code>list1[i]</code> 和 <code>list2[j]</code> 中出现，那么 <code>i + j</code> 应该是所有其他 <strong>公共字符串</strong> 中的最小值。</p>

<p>返回所有 <strong>具有最小索引和的公共字符串</strong>。以 <strong>任何顺序</strong> 返回答案。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入: </strong>list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
<strong>输出:</strong> ["Shogun"]
<strong>解释:</strong> 唯一的公共字符串是 “Shogun”。
</pre>

<p><strong>示例 2:</strong></p>

<pre><strong>输入:</strong>list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["KFC", "Shogun", "Burger King"]
<strong>输出:</strong> ["Shogun"]
<strong>解释:</strong> 具有最小索引和的公共字符串是 “Shogun”，它有最小的索引和 = (0 + 1) = 1。
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
<b>输出：</b>["sad","happy"]
<b>解释：</b>有三个公共字符串：
"happy" 索引和 = (0 + 1) = 1.
"sad" 索引和 = (1 + 0) = 1.
"good" 索引和 = (2 + 2) = 4.
最小索引和的字符串是 "sad" 和 "happy"。</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li><code>1 &lt;= list1.length, list2.length &lt;= 1000</code></li>
	<li><code>1 &lt;= list1[i].length, list2[i].length &lt;= 30</code>&nbsp;</li>
	<li><code>list1[i]</code> 和 <code>list2[i]</code> 由空格&nbsp;<code>' '</code>&nbsp;和英文字母组成。</li>
	<li><code>list1</code> 的所有字符串都是 <strong>唯一</strong> 的。</li>
	<li><code>list2</code> 中的所有字符串都是 <strong>唯一</strong> 的。</li>
</ul>
</div></div>
