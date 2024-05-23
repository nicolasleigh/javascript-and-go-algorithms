// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */

// Two pointers
var maxProfit = function (prices) {
  let l = 0; // Buy
  let r = 1; // Sell
  let maxProfit = 0;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l]; // Current profit
      maxProfit = Math.max(maxProfit, profit);
      r++;
    } else {
      // Update the buying price if the current price is lower than the current buying price.
      l = r;
      r++;
    }
  }
  return maxProfit;
};

// Greedy
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]); // Update the lowest price
    profit = Math.max(profit, prices[i] - minPrice); // Update the max profit
  }
  return profit;
};

// Dynamic Programming
var maxProfit = function (prices) {
  let dp = new Array(prices.length).fill([0, 0]);
  // dp[i][0] means the max profit of the (i+1)th day when holding a stock, always negative
  // dp[i][1] means the max profit of the (i+1)th day when not holding a stock
  dp[0][0] = -prices[0]; // first day's profit when holding a stock
  dp[0][1] = 0; // first day's profit when not holding a stock
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]); // not buying VS buying the current price
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]); // not selling VS selling the current price
  }
  return dp[prices.length - 1][1];
};
