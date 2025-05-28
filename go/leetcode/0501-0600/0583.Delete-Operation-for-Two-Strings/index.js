/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Same code as "1143. Longest Common Subsequence"
var minDistance = function (word1, word2) {
  const dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1).fill(0));

  // dp[i][j] means the length of the longest common subsequence ending with word1[i-1] and word2[j-1]
  for (let i = 1; i <= word1.length; ++i) {
    for (let j = 1; j <= word2.length; ++j) {
      // if ith element of word1 is equal to jth element of word2
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let longestCommonSubsequence = dp[word1.length][word2.length];
  let result = word1.length + word2.length - 2 * longestCommonSubsequence;

  return result;
};

var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // dp[i][j] means the length of the longest common subsequence ending with word1[i-1] and word2[j-1]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const lcsLength = dp[m][n];
  return m - lcsLength + (n - lcsLength);
};
