/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // dp[i][j] will store max subset size with zeros_limit = i, ones_limit = j
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let str of strs) {
    // count zeros & ones frequency in current string
    let zeros = 0;
    let ones = 0;
    for (let letter of str) {
      letter === "0" ? zeros++ : ones++;
    }
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }
  return dp[m][n];
};
// https://leetcode.com/problems/ones-and-zeroes/solutions/1138589/short-easy-w-explanation-o-l-m-n-dp-solution-6-lines-similar-to-knapsack/

// 0/1 Knapsack - DP Bottom-Up
var findMaxForm = function (strs, m, n) {
  // dp[i][j] represents the maximum number of strings we can choose using at most: i zeroes and j ones
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (const str of strs) {
    let zeros = 0;
    let ones = 0;
    for (const ch of str) {
      if (ch === "0") zeros++;
      else ones++;
    }

    // Go backward because we want to ensure each string is only used once (like in 0/1 Knapsack)
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }

  return dp[m][n];
};
