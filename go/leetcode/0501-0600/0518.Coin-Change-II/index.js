/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = Array(coins.length + 1)
    .fill()
    .map(() => Array(amount + 1).fill(0));

  dp[0][0] = 1;

  for (let i = 1; i <= coins.length; i++) {
    dp[i][0] = 1;
    for (let j = 0; j <= amount; j++) {
      if (coins[i - 1] <= j) {
        // note: not dp[i-1][j-coins[i-1]], because we can use the same coin multiple times
        dp[i][j] = dp[i][j - coins[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][amount];
};

// Optimized version - One row
var change = function (amount, coins) {
  let dp = Array(amount + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= coins.length; i++) {
    // left to right, because we can use the same coin multiple times
    for (let j = 0; j <= amount; j++) {
      if (coins[i - 1] <= j) {
        dp[j] = dp[j - coins[i - 1]] + dp[j];
      }
    }
  }
  return dp[amount];
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1; // One way to make amount 0 (no coins)

  for (let coin of coins) {
    // left to right, because we can use the same coin multiple times
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coin];
    }
  }

  return dp[amount];
};
