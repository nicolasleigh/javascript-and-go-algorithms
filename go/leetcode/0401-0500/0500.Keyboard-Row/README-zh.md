# [500. 键盘行](https://leetcode.cn/problems/keyboard-row/)

<div><div class="elfjS" data-track-load="description_content"><p>给你一个字符串数组 <code>words</code> ，只返回可以使用在 <strong>美式键盘</strong> 同一行的字母打印出来的单词。键盘如下图所示。</p>

<p><strong>请注意</strong>，字符串&nbsp;<strong>不区分大小写</strong>，相同字母的大小写形式都被视为在同一行<strong>。</strong></p>

<p><strong>美式键盘</strong> 中：</p>

<ul>
	<li>第一行由字符 <code>"qwertyuiop"</code> 组成。</li>
	<li>第二行由字符 <code>"asdfghjkl"</code> 组成。</li>
	<li>第三行由字符 <code>"zxcvbnm"</code> 组成。</li>
</ul>

<p><img alt="American keyboard" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/keyboard.png" style="width: 100%; max-width: 600px;"></p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<div class="example-block">
<p><strong>输入：</strong><span class="example-io">words = ["Hello","Alaska","Dad","Peace"]</span></p>

<p><b>输出：</b><span class="example-io">["Alaska","Dad"]</span></p>

<p><strong>解释：</strong></p>

<p>由于不区分大小写，<code>"a"</code> 和&nbsp;<code>"A"</code> 都在美式键盘的第二行。</p>
</div>

<p><strong>示例 2：</strong></p>

<div class="example-block">
<p><span class="example-io"><b>输入：</b>words = ["omk"]</span></p>

<p><span class="example-io"><b>输出：</b>[]</span></p>
</div>

<p><strong class="example">示例 3：</strong></p>

<div class="example-block">
<p><span class="example-io"><b>输入：</b></span><span class="example-io">words = ["adsdf","sfd"]</span></p>

<p><span class="example-io"><b>输出：</b></span><span class="example-io">["adsdf","sfd"]</span></p>
</div>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 20</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 100</code></li>
	<li><code>words[i]</code> 由英文字母（小写和大写字母）组成</li>
</ul>
</div></div>
