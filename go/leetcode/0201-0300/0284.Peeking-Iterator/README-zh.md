# [284. 窥视迭代器](https://leetcode.cn/problems/peeking-iterator/)

<div><div class="elfjS" data-track-load="description_content"><p>请你在设计一个迭代器，在集成现有迭代器拥有的&nbsp;<code>hasNext</code> 和 <code>next</code> 操作的基础上，还额外支持 <code>peek</code> 操作。</p>

<p>实现 <code>PeekingIterator</code> 类：</p>

<ul>
	<li><code>PeekingIterator(Iterator&lt;int&gt; nums)</code> 使用指定整数迭代器&nbsp;<code>nums</code> 初始化迭代器。</li>
	<li><code>int next()</code> 返回数组中的下一个元素，并将指针移动到下个元素处。</li>
	<li><code>bool hasNext()</code> 如果数组中存在下一个元素，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li>
	<li><code>int peek()</code> 返回数组中的下一个元素，但 <strong>不</strong> 移动指针。</li>
</ul>

<p><strong>注意：</strong>每种语言可能有不同的构造函数和迭代器&nbsp;<code>Iterator</code>，但均支持 <code>int next()</code> 和 <code>boolean hasNext()</code> 函数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
<strong>输出：</strong>
[null, 1, 2, 2, 3, false]

<strong>解释：</strong>
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [<u><strong>1</strong></u>,2,3]
peekingIterator.next();    // 返回 1 ，指针移动到下一个元素 [1,<u><strong>2</strong></u>,3]
peekingIterator.peek();    // 返回 2 ，指针未发生移动 [1,<u><strong>2</strong></u>,3]
peekingIterator.next();    // 返回 2 ，指针移动到下一个元素 [1,2,<u><strong>3</strong></u>]
peekingIterator.next();    // 返回 3 ，指针移动到下一个元素 [1,2,3]
peekingIterator.hasNext(); // 返回 False
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li>对 <code>next</code> 和 <code>peek</code> 的调用均有效</li>
	<li><code>next</code>、<code>hasNext</code> 和 <code>peek </code>最多调用&nbsp; <code>1000</code> 次</li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong>你将如何拓展你的设计？使之变得通用化，从而适应所有的类型，而不只是整数型？</p>
</div></div>
