// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
// Greedy
var maxProfit = function (prices) {
  // prices[3] - prices[0] = (prices[3] - prices[2]) + (prices[2] - prices[1]) + (prices[1] - prices[0])
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      sum += diff;
    }
  }
  return sum;
};
