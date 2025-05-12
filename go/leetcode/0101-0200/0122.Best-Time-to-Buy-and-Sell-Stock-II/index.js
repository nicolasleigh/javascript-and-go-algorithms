// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = new Array(prices.length).fill([0, 0]);
  // dp[i][0] means the max profit of the (i+1)th day when holding a stock, always negative
  // dp[i][1] means the max profit of the (i+1)th day when not holding a stock
  dp[0][0] = -prices[0]; // first day's profit when holding a stock
  dp[0][1] = 0; // first day's profit when not holding a stock
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]); // The only difference between this and "121. Best Time to Buy and Sell Stock"
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
  }
  return dp[prices.length - 1][1];
};

// s0 --buy--> s1
// s1 --sell--> s0
// Similar to "309. Best Time to Buy and Sell Stock with Cooldown"
var maxProfit = function (prices) {
  let s0 = [];
  let s1 = [];

  s0[0] = 0;
  s1[0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    s0[i] = Math.max(s0[i - 1], prices[i] + s1[i - 1]);
    s1[i] = Math.max(s1[i - 1], s0[i - 1] - prices[i]);
  }
  return s0[prices.length - 1];
};
