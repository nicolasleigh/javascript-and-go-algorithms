# [135. Candy (Hard)](https://leetcode.com/problems/candy/)

<p>There are <code>n</code> children standing in a line. Each child is assigned a rating value given in the integer array <code>ratings</code>.</p>

<p>You are giving candies to these children subjected to the following requirements:</p>

<ul>
	<li>Each child must have at least one candy.</li>
	<li>Children with a higher rating get more candies than their neighbors.</li>
</ul>

<p>Return <em>the minimum number of candies you need to have to distribute the candies to the children</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> ratings = [1,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> ratings = [1,2,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == ratings.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= ratings[i] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [Apple](https://leetcode.com/company/apple)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Greedy](https://leetcode.com/tag/greedy/)

---

Great question.

The **"Candy"** problem is considered a **greedy algorithm** problem because:

---

### 💡 **Greedy Strategy in a Nutshell**

> At each step, make the **locally optimal** (best) decision — hoping it leads to a **globally optimal** (best overall) solution.

---

### ✅ How is the "Candy" problem greedy?

You're solving it by **locally comparing each child to their neighbor** and **greedily increasing the candy count only when needed**, without backtracking or trying all possible distributions.

1. **Left to right**:

   - If a child has a higher rating than the previous one, give **more candy** than the left neighbor.
   - Otherwise, keep it as 1 — **don’t over-distribute**.

2. **Right to left**:

   - Similarly, fix cases missed in the first pass where the **right neighbor has fewer candies** despite a lower rating.

At each step, you're making a **greedy decision**:

- "Does this child need more candies to satisfy the rules?"
- If yes, adjust just enough.
- If no, leave it — never "plan ahead" or check all options.

---

### 🧠 Why it works?

Because the rules are **local** (only involve neighbors), this greedy approach is both **correct** and **optimal**.

There’s no need for complex dynamic programming or exhaustive search, as **local correctness guarantees global correctness** in this particular problem.

---

### 📌 Summary

- **Greedy:** Because we fix each violation as we see it, step by step.
- **Efficient:** We never look back more than one step.
- **Optimal:** We always ensure minimum candies are used.

Let me know if you want a visual walkthrough or why brute force / DP isn't necessary here.
