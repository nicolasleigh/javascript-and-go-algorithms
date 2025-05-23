/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(coins.length + 1)
    .fill()
    .map(() => Array(amount + 1).fill(Infinity));

  for (let i = 0; i <= coins.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (coins[i - 1] <= j) {
        // same coin can be used multiple times
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][amount] === Infinity ? -1 : dp[coins.length][amount];
};

// Optimized version - One row
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= coins.length; i++) {
    // left to right, because we can use the same coin multiple times
    for (let j = 0; j <= amount; j++) {
      if (coins[i - 1] <= j) {
        dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
