// 279. Perfect Squares
// https://leetcode.com/problems/perfect-squares/description/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let items = Math.floor(Math.sqrt(n));
  let dp = Array(items + 1)
    .fill()
    .map(() => Array(n + 1).fill(Infinity));

  for (let i = 0; i <= items; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= items; i++) {
    for (let j = 0; j <= n; j++) {
      if (i * i <= j) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - i * i] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[items][n];
};

// Optimized version - One row
var numSquares = function (n) {
  let items = Math.floor(Math.sqrt(n));
  let dp = Array(n + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= items; i++) {
    for (let j = 0; j <= n; j++) {
      if (i * i <= j) {
        dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
      }
    }
  }
  return dp[n];
};
