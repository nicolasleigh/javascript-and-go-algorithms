// 115. Distinct Subsequences
// https://leetcode.com/problems/distinct-subsequences/description/
// https://leetcode.com/problems/distinct-subsequences/solutions/37327/easy-to-understand-dp-in-java/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let dp = Array(t.length + 1)
    .fill()
    .map(() => Array(s.length + 1).fill(0));

  for (let j = 0; j <= s.length; j++) {
    dp[0][j] = 1;
  }

  // dp[i][j] means the number of distinct subsequences of t[0..i-1] in s[0..j-1]
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      // if ith element of t is equal to jth element of s
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[t.length][s.length];
};
