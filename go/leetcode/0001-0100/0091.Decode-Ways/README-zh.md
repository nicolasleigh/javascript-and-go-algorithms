# [91. 解码方法](https://leetcode.cn/problems/decode-ways/)

<div><div class="elfjS" data-track-load="description_content"><p>一条包含字母&nbsp;<code>A-Z</code> 的消息通过以下映射进行了 <strong>编码</strong> ：</p>

<p><code>"1" -&gt; 'A'<br>
"2" -&gt; 'B'<br>
...<br>
"25" -&gt; 'Y'<br>
"26" -&gt; 'Z'</code></p>

<p>然而，在&nbsp;<strong>解码</strong> 已编码的消息时，你意识到有许多不同的方式来解码，因为有些编码被包含在其它编码当中（<code>"2"</code> 和 <code>"5"</code> 与 <code>"25"</code>）。</p>

<p>例如，<code>"11106"</code> 可以映射为：</p>

<ul>
	<li><code>"AAJF"</code> ，将消息分组为 <code>(1, 1, 10, 6)</code></li>
	<li><code>"KJF"</code> ，将消息分组为 <code>(11, 10, 6)</code></li>
	<li>消息不能分组为&nbsp; <code>(1, 11, 06)</code> ，因为 <code>"06"</code>&nbsp;不是一个合法编码（只有 "6" 是合法的）。</li>
</ul>

<p>注意，可能存在无法解码的字符串。</p>

<p>给你一个只含数字的 <strong>非空 </strong>字符串 <code>s</code> ，请计算并返回 <strong>解码</strong> 方法的 <strong>总数</strong> 。如果没有合法的方式解码整个字符串，返回 <code>0</code>。</p>

<p>题目数据保证答案肯定是一个 <strong>32 位</strong> 的整数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>s = "12"
<strong>输出：</strong>2
<strong>解释：</strong>它可以解码为 "AB"（1 2）或者 "L"（12）。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>s = "226"
<strong>输出：</strong>3
<strong>解释：</strong>它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>s = "06"
<strong>输出：</strong>0
<strong>解释：</strong>"06" 无法映射到 "F" ，因为存在前导零（"6" 和 "06" 并不等价）。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> 只包含数字，并且可能包含前导零。</li>
</ul>
</div></div>
