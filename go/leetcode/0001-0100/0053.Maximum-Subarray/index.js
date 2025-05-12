// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Same problem in greedy section "MaximumSubarray.js"
var maxSubArray = function (nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  // let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    // max = Math.max(max, dp[i]);
  }
  // return max;
  return Math.max(...dp);
};
