# [45. Jump Game II (Medium)](https://leetcode.com/problems/jump-game-ii/)

<p>Given an array of non-negative integers <code>nums</code>, you are initially positioned at the first index of the array.</p>

<p>Each element in the array represents your maximum jump length at that position.</p>

<p>Your goal is to reach the last index in the minimum number of jumps.</p>

<p>You can assume that you can always reach the last index.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,3,1,1,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [2,3,0,1,4]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [Apple](https://leetcode.com/company/apple), [tcs](https://leetcode.com/company/tcs)

**Related Topics**:  
[Array](https://leetcode.com/tag/array/), [Greedy](https://leetcode.com/tag/greedy/)

**Similar Questions**:

- [Jump Game (Medium)](https://leetcode.com/problems/jump-game/)
- [Jump Game III (Medium)](https://leetcode.com/problems/jump-game-iii/)

---

Great question!

The algorithm used in **Leetcode 45: Jump Game II** is called **greedy** because at each point in the array, it makes the **locally optimal choice** — trying to **jump as far as possible** — with the **hope that this leads to a global optimum** (the fewest number of jumps to reach the end).

---

### 🔍 Why it's "Greedy":

At every index, instead of exploring all possible jumps or tracking the minimum through dynamic programming, we:

- Track the **farthest position** we can reach (`canReach`) with the current jump.
- When we reach the end of the current jump range (`needChoose`), we **greedily jump to the farthest reachable point** so far.
- We don't look ahead beyond that — we just go for the **best immediate choice**.

---

### ⚖️ Example:

For `nums = [2, 3, 1, 1, 4]`, the greedy approach does this:

- Start at index 0: can jump up to index 2.
- Among `nums[1] = 3` and `nums[2] = 1`, the greedy choice is index 1 (jump to 3), which reaches index 4 — the goal.
- So the path is `0 -> 1 -> 4`.

We always **choose the next jump to reach the farthest possible index**, not necessarily the one with the smallest immediate step.

---

### 🧠 Summary:

- **Greedy = "Always choose the best at the moment"**.
- In this problem, that means: **always extend your reach as far as possible**.
- It avoids unnecessary computation and still guarantees an optimal answer.

Let me know if you want a comparison to a dynamic programming or BFS version!
