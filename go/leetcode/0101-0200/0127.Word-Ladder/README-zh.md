# [127. 单词接龙](https://leetcode.cn/problems/word-ladder/)

<div><div class="elfjS" data-track-load="description_content"><p>字典&nbsp;<code>wordList</code> 中从单词 <code>beginWord</code><em>&nbsp;</em>到&nbsp;<code>endWord</code> 的 <strong>转换序列 </strong>是一个按下述规格形成的序列&nbsp;<code>beginWord -&gt; s<sub>1</sub>&nbsp;-&gt; s<sub>2</sub>&nbsp;-&gt; ... -&gt; s<sub>k</sub></code>：</p>

<ul>
	<li>每一对相邻的单词只差一个字母。</li>
	<li>&nbsp;对于&nbsp;<code>1 &lt;= i &lt;= k</code>&nbsp;时，每个&nbsp;<code>s<sub>i</sub></code>&nbsp;都在&nbsp;<code>wordList</code>&nbsp;中。注意， <code>beginWord</code><em>&nbsp;</em>不需要在&nbsp;<code>wordList</code>&nbsp;中。</li>
	<li><code>s<sub>k</sub>&nbsp;== endWord</code></li>
</ul>

<p>给你两个单词<em> </em><code>beginWord</code><em>&nbsp;</em>和 <code>endWord</code> 和一个字典 <code>wordList</code> ，返回 <em>从&nbsp;<code>beginWord</code> 到&nbsp;<code>endWord</code> 的 <strong>最短转换序列</strong> 中的 <strong>单词数目</strong></em> 。如果不存在这样的转换序列，返回 <code>0</code> 。</p>
&nbsp;

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
<strong>输出：</strong>5
<strong>解释：</strong>一个最短转换序列是 "hit" -&gt; "hot" -&gt; "dot" -&gt; "dog" -&gt; "cog", 返回它的长度 5。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
<strong>输出：</strong>0
<strong>解释：</strong>endWord "cog" 不在字典中，所以无法进行转换。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= beginWord.length &lt;= 10</code></li>
	<li><code>endWord.length == beginWord.length</code></li>
	<li><code>1 &lt;= wordList.length &lt;= 5000</code></li>
	<li><code>wordList[i].length == beginWord.length</code></li>
	<li><code>beginWord</code>、<code>endWord</code> 和 <code>wordList[i]</code> 由小写英文字母组成</li>
	<li><code>beginWord != endWord</code></li>
	<li><code>wordList</code> 中的所有字符串 <strong>互不相同</strong></li>
</ul>
</div></div>
