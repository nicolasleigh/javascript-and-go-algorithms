// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Two pointers
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

// Dynamic programming
// Similar to "1143. Longest Common Subsequence"
var isSubsequence = function (s, t) {
  let dp = Array(s.length + 1)
    .fill()
    .map(() => Array(t.length + 1).fill(0));

  // dp[i][j] means the length of the longest subsequence of s[0..i-1] and t[0..j-1]
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      // If ith element of s is equal to jth element of t
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  // If the length of the longest subsequence of s and t is equal to the length of s
  return dp[s.length][t.length] === s.length;
};
