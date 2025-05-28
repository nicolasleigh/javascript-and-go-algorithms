/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// s0 --buy--> s1
// s1 --sell--> s0
var maxProfit = function (prices, fee) {
  let s0 = []; // Not hold stock
  let s1 = []; // Hold stock

  s0[0] = 0;
  s1[0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // The only difference between this and "122. Best Time to Buy and Sell Stock II" is "-fee" added to s0[i]
    s0[i] = Math.max(s0[i - 1], prices[i] + s1[i - 1] - fee);
    s1[i] = Math.max(s1[i - 1], s0[i - 1] - prices[i]);
  }
  return s0[prices.length - 1];
};

var maxProfit = function (prices, fee) {
  let n = prices.length;
  let hold = -prices[0]; // max profit while holding a stock
  let cash = 0; // max profit while not holding a stock

  for (let i = 1; i < n; i++) {
    let prevHold = hold;
    let prevCash = cash;

    hold = Math.max(prevHold, prevCash - prices[i]);
    cash = Math.max(prevCash, prevHold + prices[i] - fee);
  }

  return cash;
};
