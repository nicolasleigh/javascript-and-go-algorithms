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
