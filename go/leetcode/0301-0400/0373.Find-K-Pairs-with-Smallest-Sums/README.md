# [373. Find K Pairs with Smallest Sums (Medium)](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

<div><div class="elfjS" data-track-load="description_content"><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code> sorted in <strong>non-decreasing&nbsp;order</strong> and an integer <code>k</code>.</p>

<p>Define a pair <code>(u, v)</code> which consists of one element from the first array and one element from the second array.</p>

<p>Return <em>the</em> <code>k</code> <em>pairs</em> <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> <em>with the smallest sums</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,7,11], nums2 = [2,4,6], k = 3
<strong>Output:</strong> [[1,2],[1,4],[1,6]]
<strong>Explanation:</strong> The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums1 = [1,1,2], nums2 = [1,2,3], k = 2
<strong>Output:</strong> [[1,1],[1,1]]
<strong>Explanation:</strong> The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>nums1</code> and <code>nums2</code> both are sorted in <strong>non-decreasing order</strong>.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
	<li><code>k &lt;=&nbsp;nums1.length *&nbsp;nums2.length</code></li>
</ul>
</div></div>
Related Topics:
<div class="overflow-hidden transition-all" style="height: auto; transition-duration: 0.25s;"><div class="mt-2 flex flex-wrap gap-1 pl-7"><a target="_blank" rel="noopener noreferrer" class="no-underline hover:text-current relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-text-secondary" href="/tag/array/">Array</a> |
<a target="_blank" rel="noopener noreferrer" class="no-underline hover:text-current relative inline-flex items-center justify-center text-caption px-2 py-1 gap-1 rounded-full bg-fill-secondary text-text-secondary" href="/tag/heap-priority-queue/">Heap (Priority Queue)</a></div></div>
