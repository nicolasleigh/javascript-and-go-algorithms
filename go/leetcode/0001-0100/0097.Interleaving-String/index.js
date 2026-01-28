/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 97. Interleaving String
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  const l = s3.length;

  if (m + n !== l) return false;

  // dp[i][j] means s3[0..i+j-1] can be formed by interleaving s1[0..i-1] and s2[0..j-1]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;

  // Fill first column
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  // Fill first row
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // Fill the rest of the table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const fromS1 = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
      const fromS2 = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
      dp[i][j] = fromS1 || fromS2;
    }
  }

  return dp[m][n];
};
