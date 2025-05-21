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

// Solution 2
function maxProfit(k, prices) {
  if (prices.length === 0) return 0;

  // buy[i]: the max profit after buying the i-th stock (i.e., i-th transaction's buy).
  // sell[i]: the max profit after selling the i-th stock (i.e., i-th transaction's sell).
  const buy = new Array(k + 1).fill(-Infinity);
  const sell = new Array(k + 1).fill(0);

  // Greedy case: as many transactions as we want
  if (k >= Math.floor(prices.length / 2)) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }

  // DP approach
  for (const price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.max(buy[i], sell[i - 1] - price);
      sell[i] = Math.max(sell[i], buy[i] + price);
    }
  }

  return sell[k];
}
