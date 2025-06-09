// 122. Best Time to Buy and Sell Stock II
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

// Similar to "309. Best Time to Buy and Sell Stock with Cooldown"

function maxProfit(prices) {
  const n = prices.length;
  const s0 = new Array(n).fill(0); // Holding stock
  const s1 = new Array(n).fill(0); // Not holding stock

  s0[0] = -prices[0]; // Buy on day 0
  s1[0] = 0; // No action on day 0

  for (let i = 1; i < n; i++) {
    s0[i] = Math.max(s0[i - 1], s1[i - 1] - prices[i]); // hold or buy
    s1[i] = Math.max(s1[i - 1], s0[i - 1] + prices[i]); // rest or sell
  }

  return s1[n - 1];
}
