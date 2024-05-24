// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(false));
  let count = 0;

  // one character is always a palindrome
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count++;
  }

  // check for two adjacent characters
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    }
  }

  // dp[i][j] means s[i..j] is a palindrome
  // check for three or more characters
  for (let len = 3; len <= s.length; len++) {
    for (let i = 0; i < s.length - len + 1; i++) {
      if (s[i] === s[i + len - 1] && dp[i + 1][i + len - 2]) {
        dp[i][i + len - 1] = true;
        count++;
      }
    }
  }

  return count;
};

// Approach 2
var countSubstrings = function (s) {
  const dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(false));
  let count = 0;

  // dp[i][j] means s[i..j] is a palindrome
  // from bottom to top, from left to right, because dp[i][j] depends on dp[i+1][j-1]
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          // one or two characters
          dp[i][j] = true;
          count++;
        } else if (dp[i + 1][j - 1]) {
          // three or more characters
          dp[i][j] = true;
          count++;
        }
      }
    }
  }
  return count;
};
