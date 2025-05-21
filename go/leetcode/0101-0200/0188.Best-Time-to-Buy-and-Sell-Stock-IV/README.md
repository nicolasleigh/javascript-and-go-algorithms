# [188. Best Time to Buy and Sell Stock IV (Hard)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

<p>Say you have an array for which the <i>i<span style="font-size: 10.8333px;">-</span></i><span style="font-size: 10.8333px;">th</span>&nbsp;element is the price of a given stock on day <i>i</i>.</p>

<p>Design an algorithm to find the maximum profit. You may complete at most <b>k</b> transactions.</p>

<p><b>Note:</b><br>
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).</p>

<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> [2,4,1], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> [3,2,6,5,0,3], k = 2
<strong>Output:</strong> 7
<strong>Explanation:</strong> Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
&nbsp;            Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
</pre>

**Related Topics**:  
[Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)

**Similar Questions**:

- [Best Time to Buy and Sell Stock (Easy)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [Best Time to Buy and Sell Stock II (Easy)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [Best Time to Buy and Sell Stock III (Hard)](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

---

Sure! Here's a clear breakdown of how the solution to **Leetcode 188. Best Time to Buy and Sell Stock IV** works:

---

### 🧠 Problem Summary

- You're given a list of stock prices, where `prices[i]` is the price on day `i`.
- You can **buy and sell** at most `k` times.
- Each transaction consists of **buying and then selling** one stock.
- You want to find the **maximum profit** you can earn.

---

## 🧮 Main Idea

There are **two cases** to handle:

---

### 🟢 **Case 1: Unlimited Transactions (Greedy Shortcut)**

If `k >= prices.length / 2`, then it's the same as having **unlimited transactions**.
Why? Because you can't complete more than `prices.length / 2` full transactions (each needing at least 2 days).

✅ In this case, just **sum all price increases**:

```js
if (prices[i] > prices[i - 1]) {
  profit += prices[i] - prices[i - 1];
}
```

This is **linear time** and very efficient.

---

### 🔵 **Case 2: Limited Transactions (Dynamic Programming)**

If `k < prices.length / 2`, then we use **dynamic programming**.

We define two 1D arrays:

```js
const buy = new Array(k + 1).fill(-Infinity);
const sell = new Array(k + 1).fill(0);
```

- `buy[i]`: the **max profit after buying the i-th stock** (i.e., i-th transaction's buy).
- `sell[i]`: the **max profit after selling the i-th stock** (i.e., i-th transaction's sell).

#### 🚀 DP Transitions (Day by day):

For each price:

```js
buy[i] = max(buy[i], sell[i - 1] - price); // Buy after completing i-1 transactions
sell[i] = max(sell[i], buy[i] + price); // Sell after buying in the i-th transaction
```

This ensures we’re tracking the best profit at each step.

#### 🧠 Intuition:

- `sell[i - 1] - price`: Use the profit from the previous transaction and buy a new stock.
- `buy[i] + price`: Sell the stock you bought in transaction `i`.

---

### ⏱️ Time and Space Complexity

- **Time:** `O(k * n)` where `n = prices.length`
- **Space:** `O(k)` (since we use only two 1D arrays)

---

### ✅ Example

For input:

```js
maxProfit(2, [3, 2, 6, 5, 0, 3]);
```

Best strategy:

- Buy at 2, sell at 6 → profit = 4
- Buy at 0, sell at 3 → profit = 3

**Total = 7**

---

Let me know if you'd like a visual diagram of the state transitions or a step-by-step dry run!
