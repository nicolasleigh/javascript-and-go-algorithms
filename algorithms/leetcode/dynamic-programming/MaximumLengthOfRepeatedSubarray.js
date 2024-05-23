// 718. Maximum Length of Repeated Subarray
// https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/

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
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res;
};
