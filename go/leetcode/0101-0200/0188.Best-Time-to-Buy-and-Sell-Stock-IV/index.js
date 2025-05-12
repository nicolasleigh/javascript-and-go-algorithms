// 188. Best Time to Buy and Sell Stock IV
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let dp = new Array(2 * k + 1).fill(-Infinity);

  dp[0] = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < 2 * k; j += 2) {
      dp[j + 1] = Math.max(dp[j + 1], dp[j] - prices[i]);
      dp[j + 2] = Math.max(dp[j + 2], dp[j + 1] + prices[i]);
    }
  }
  return dp[2 * k];
};
