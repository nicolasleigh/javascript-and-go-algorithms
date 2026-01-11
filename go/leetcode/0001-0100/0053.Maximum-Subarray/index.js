// 53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
var maxSubArray = function (nums) {
  // dp[i] store the maximum sum of subArrays ending at index i.
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};

// Solution 2
var maxSubArray = function (nums) {
  let result = -Infinity;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i];

    if (count > result) {
      result = count;
    }

    if (count < 0) {
      count = 0;
    }
  }
  return result;
};
