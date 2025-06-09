// 115. Distinct Subsequences
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

// ==============
var numDistinct = function (s, t) {
  const m = s.length;
  const n = t.length;

  // dp[i][j] represents the number of distinct subsequences of the first i characters of s that equal the first j characters of t.
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // If t is empty, there is exactly one subsequence of s that matches t (the empty subsequence). Hence, dp[i][0] = 1 for all i.
  // If s is empty but t is not, no subsequences of s can match t. Hence, dp[0][j] = 0 for all j > 0.
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  // If s[i-1] == t[j-1], then the number of ways to form t[0..j-1] from s[0..i-1] is the sum of:
  // 1) The number of ways to form t[0..j-1] from s[0..i-2] (excluding the current character of s).
  // 2) The number of ways to form t[0..j-2] from s[0..i-2] (including the current character of s).
  // If s[i-1] != t[j-1], then the number of ways to form t[0..j-1] from s[0..i-1] is the same as
  // the number of ways to form t[0..j-1] from s[0..i-2] (excluding the current character of s).
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        // Match: include + exclude current char of s
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        // No match: skip current char of s
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};
