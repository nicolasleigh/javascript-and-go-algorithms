# [97. 交错字符串](https://leetcode.cn/problems/interleaving-string/)

<div><div class="elfjS" data-track-load="description_content"><p>给定三个字符串&nbsp;<code>s1</code>、<code>s2</code>、<code>s3</code>，请你帮忙验证&nbsp;<code>s3</code>&nbsp;是否是由&nbsp;<code>s1</code>&nbsp;和&nbsp;<code>s2</code><em> </em><strong>交错 </strong>组成的。</p>

<p>两个字符串 <code>s</code> 和 <code>t</code> <strong>交错</strong> 的定义与过程如下，其中每个字符串都会被分割成若干 <strong>非空</strong> <span data-keyword="substring-nonempty" class=" cursor-pointer relative text-dark-blue-s text-sm"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r6d:" data-state="closed" class="">子字符串</button></span>：</p>

<ul>
	<li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code></li>
	<li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code></li>
	<li><code>|n - m| &lt;= 1</code></li>
	<li><strong>交错</strong> 是 <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> 或者 <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></li>
</ul>

<p><strong>注意：</strong><code>a + b</code> 意味着字符串 <code>a</code> 和 <code>b</code> 连接。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg">
<pre><strong>输入：</strong>s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
<strong>输出：</strong>false
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>s1 = "", s2 = "", s3 = ""
<strong>输出：</strong>true
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= s1.length, s2.length &lt;= 100</code></li>
	<li><code>0 &lt;= s3.length &lt;= 200</code></li>
	<li><code>s1</code>、<code>s2</code>、和 <code>s3</code> 都由小写英文字母组成</li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>您能否仅使用 <code>O(s2.length)</code> 额外的内存空间来解决它?</p>
</div></div>
