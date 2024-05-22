// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let res1 = robRange(0, nums.length - 2);
  let res2 = robRange(1, nums.length - 1);

  function robRange(start, end) {
    if (nums.length === 1) return nums[0];
    if (end === start) return nums[start];

    let dp = Array(nums.length).fill(0);
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);

    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[end];
  }

  return Math.max(res1, res2);
};
