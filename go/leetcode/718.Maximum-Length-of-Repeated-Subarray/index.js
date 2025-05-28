/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findLength = function (nums1, nums2) {
  let dp = Array(nums1.length + 1)
    .fill()
    .map(() => Array(nums2.length + 1).fill(0));

  let res = 0;

  // dp[i][j] means the length of the longest common subarray ending with nums1[i-1] and nums2[j-1]
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      // if ith element of nums1 is equal to jth element of nums2
      // Similar to "1143. Longest Common Subsequence"
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res;
};

var findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let maxLen = 0;

  // dp[i][j] = the length of the longest common subarray that starts at nums1[i] and nums2[j]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen;
};
