# [535. Encode and Decode TinyURL (Medium)](https://leetcode.com/problems/encode-and-decode-tinyurl/)

<blockquote>Note: This is a companion problem to the <a href="https://leetcode.com/discuss/interview-question/system-design/" target="_blank">System Design</a> problem: <a href="https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener-(-TinyURL-)-System/" target="_blank">Design TinyURL</a>.</blockquote>

<p>TinyURL is a URL shortening service where you enter a URL such as <code>https://leetcode.com/problems/design-tinyurl</code> and it returns a short URL such as <code>http://tinyurl.com/4e9iAk</code>. Design a class to encode a URL and decode a tiny URL.</p>

<p>There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.</p>

<p>Implement the <code>Solution</code> class:</p>

<ul>
	<li><code>Solution()</code> Initializes the object of the system.</li>
	<li><code>String encode(String longUrl)</code> Returns a tiny URL for the given <code>longUrl</code>.</li>
	<li><code>String decode(String shortUrl)</code> Returns the original long URL for the given <code>shortUrl</code>. It is guaranteed that the given <code>shortUrl</code> was encoded by the same object.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> url = "https://leetcode.com/problems/design-tinyurl"
<strong>Output:</strong> "https://leetcode.com/problems/design-tinyurl"

<strong>Explanation:</strong>
Solution obj = new Solution();
string tiny = obj.encode(url); // returns the encoded tiny url.
string ans = obj.decode(tiny); // returns the original url after deconding it.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= url.length &lt;= 10<sup>4</sup></code></li>
	<li><code>url</code> is guranteed to be a valid URL.</li>
</ul>

**Companies**:  
[Microsoft](https://leetcode.com/company/microsoft)

**Related Topics**:  
[Hash Table](https://leetcode.com/tag/hash-table/), [String](https://leetcode.com/tag/string/), [Design](https://leetcode.com/tag/design/), [Hash Function](https://leetcode.com/tag/hash-function/)
