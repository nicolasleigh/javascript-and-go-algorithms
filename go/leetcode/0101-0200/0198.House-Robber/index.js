/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp[i] represents the largest value can be robbed from nums[0] to nums[i]
  let dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]); // Represent not rob nums[i] versus rob nums[i]
  }

  return dp[nums.length - 1];
};
