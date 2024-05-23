// 714. Best Time to Buy and Sell Stock with Transaction Fee
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// s0 --buy--> s1
// s1 --sell--> s0
var maxProfit = function (prices, fee) {
  let s0 = [];
  let s1 = [];

  s0[0] = 0;
  s1[0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // The only difference between this and "122. Best Time to Buy and Sell Stock II" is "-fee" added to s0[i]
    s0[i] = Math.max(s0[i - 1], prices[i] + s1[i - 1] - fee);
    s1[i] = Math.max(s1[i - 1], s0[i - 1] - prices[i]);
  }
  return s0[prices.length - 1];
};
