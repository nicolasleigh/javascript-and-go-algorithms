/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(target + 1).fill(0));

  // dp[0][0] = 1;

  for (let i = 0; i <= nums.length; i++) {
    dp[i][0] = 1;
  }

  // iterate over the target first, then the nums. Not like "518. Coin Change II", here the order matters, so instead of combination, it's permutation.
  for (let j = 0; j <= target; j++) {
    for (let i = 1; i <= nums.length; i++) {
      if (nums[i - 1] <= j) {
        // note: dp[nums.length][j - nums[i - 1]]
        dp[i][j] = dp[i - 1][j] + dp[nums.length][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[nums.length][target];
};

// Optimized version - One row
var combinationSum4 = function (nums, target) {
  let dp = Array(target + 1).fill(0);

  dp[0] = 1;

  for (let j = 0; j <= target; j++) {
    for (let i = 1; i <= nums.length; i++) {
      if (nums[i - 1] <= j) {
        dp[j] = dp[j] + dp[j - nums[i - 1]];
      }
    }
  }
  return dp[target];
};

function combinationSum4(nums, target) {
  // dp[i] means the number of combinations to get sum i.
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // One way to make target 0 (choose nothing)

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      // If i - num >= 0, we can use num to build up to i.
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
}
