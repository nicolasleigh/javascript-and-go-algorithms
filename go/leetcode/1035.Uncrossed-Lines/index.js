/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Same as "1143. Longest Common Subsequence"
var maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  // Create a (m+1) x (n+1) DP table
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]; // match
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // skip one
      }
    }
  }

  return dp[m][n];
};
