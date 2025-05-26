/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // dp[i][j] means the longest palindromic subsequence's length in s[i..j]
  let dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(0));

  // one character is always a palindrome
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  // from bottom to top, from left to right, because dp[i][j] depends on dp[i+1][j-1]
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }
  return dp[0][s.length - 1];
};
