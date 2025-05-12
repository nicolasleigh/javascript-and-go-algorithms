// 1035. Uncrossed Lines
// https://leetcode.com/problems/uncrossed-lines/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Same as "1143. Longest Common Subsequence"
var maxUncrossedLines = function (nums1, nums2) {
  const dp = Array(nums1.length + 1)
    .fill()
    .map(() => Array(nums2.length + 1).fill(0));

  for (let i = 1; i <= nums1.length; ++i) {
    for (let j = 1; j <= nums2.length; ++j) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[nums1.length][nums2.length];
};
