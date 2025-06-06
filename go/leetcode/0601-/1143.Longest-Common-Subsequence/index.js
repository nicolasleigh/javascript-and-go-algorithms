/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Same as "1035. Uncrossed Lines"
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array(text1.length + 1)
    .fill()
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; ++i) {
    for (let j = 1; j <= text2.length; ++j) {
      // if ith element of text1 is equal to jth element of text2
      // Similar to "718. Maximum Length of Repeated Subarray"
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // Initialize a (m+1) x (n+1) DP table with all 0s
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};
