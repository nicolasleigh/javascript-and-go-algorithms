// 123. Best Time to Buy and Sell Stock III
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/149383/easy-dp-solution-using-state-machine-o-n-time-complexity-o-1-space-complexity/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let s1 = -prices[0];
  let s2 = -Infinity;
  let s3 = -Infinity;
  let s4 = -Infinity;

  for (let i = 1; i < prices.length; i++) {
    s1 = Math.max(s1, -prices[i]);
    s2 = Math.max(s2, s1 + prices[i]);
    s3 = Math.max(s3, s2 - prices[i]);
    s4 = Math.max(s4, s3 + prices[i]);
  }

  return Math.max(0, s4);
};
