/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // dp[i][j] will hold the minimum path sum to reach cell (i, j)
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  dp[0][0] = grid[0][0];

  // Initialize first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }

  // Initialize first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = grid[0][j] + dp[0][j - 1];
  }

  // Fill dp array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};
