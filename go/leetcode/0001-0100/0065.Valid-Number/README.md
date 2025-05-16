# [65. Valid Number (Hard)](https://leetcode.com/problems/valid-number/)

<p>Validate if a given string can be interpreted as&nbsp;a decimal number.</p>

<p>Some examples:<br>
<code>"0"</code> =&gt; <code>true</code><br>
<code>" 0.1 "</code> =&gt; <code>true</code><br>
<code>"abc"</code> =&gt; <code>false</code><br>
<code>"1 a"</code> =&gt; <code>false</code><br>
<code>"2e10"</code> =&gt; <code>true</code><br>
<code>" -90e3&nbsp; &nbsp;"</code> =&gt; <code>true</code><br>
<code>" 1e"</code> =&gt; <code>false</code><br>
<code>"e3"</code> =&gt; <code>false</code><br>
<code>" 6e-1"</code> =&gt; <code>true</code><br>
<code>" 99e2.5&nbsp;"</code> =&gt; <code>false</code><br>
<code>"53.5e93"</code> =&gt; <code>true</code><br>
<code>" --6 "</code> =&gt; <code>false</code><br>
<code>"-+3"</code> =&gt; <code>false</code><br>
<code>"95a54e53"</code> =&gt; <code>false</code></p>

<p><strong>Note:</strong> It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:</p>

<ul>
	<li>Numbers 0-9</li>
	<li>Exponent - "e"</li>
	<li>Positive/negative sign - "+"/"-"</li>
	<li>Decimal point - "."</li>
</ul>

<p>Of course, the context of these characters also matters in the input.</p>

**Related Topics**:  
[Math](https://leetcode.com/tag/math/), [String](https://leetcode.com/tag/string/)

**Similar Questions**:

- [String to Integer (atoi) (Medium)](https://leetcode.com/problems/string-to-integer-atoi/)

---

Given a string s, return whether s is a valid number.

For example, all the following are valid numbers: `"2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"`, while the following are not valid numbers: `"abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"`.

Formally, a valid number is defined using one of the following definitions:

An integer number followed by an optional exponent.
A decimal number followed by an optional exponent.
An integer number is defined with an optional sign '-' or '+' followed by digits.

A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

Digits followed by a dot '.'.
Digits followed by a dot '.' followed by digits.
A dot '.' followed by digits.
An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

The digits are defined as one or more digits.
