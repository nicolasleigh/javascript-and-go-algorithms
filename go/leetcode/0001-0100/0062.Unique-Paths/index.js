// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/description/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = Array(m)
    .fill()
    .map(() => Array(n));

  // let dp = Array(m).fill().map(() => Array(n).fill(1)); // by using this line, we can remove the following two for loops

  // dp[i][j] represents the number of unique paths from (0, 0) to (i, j)
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

var uniquePaths = function (m, n) {
  // Initialize a 2D array `dp` with dimensions m x n
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // Base case: there's only 1 way to reach any cell in the first row or first column
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // Fill the rest of the dp table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
