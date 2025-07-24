/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);

  // In nums array, the sum of the left group is l, the sum of the right group is (sum - l),
  // so l - (sum - l) = target, so 2l = sum + target, so (sum + target) must be even
  let l = Math.floor((sum + target) / 2);

  // target can be negative, (sum + target) must be even
  if (sum < Math.abs(target) || (sum + target) % 2 !== 0) return 0;

  // When l is negative, this function call will return 0, so the following code will not run
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(l + 1).fill(0));

  // base case
  for (let i = 0; i <= nums.length; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= l; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[nums.length][l];
};

// Optimized version - One row
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let l = Math.floor((sum + target) / 2);

  if (sum < Math.abs(target) || (sum + target) % 2 !== 0) return 0;

  // We define dp[i] as the number of ways to sum up to i using any subset of nums.
  let dp = Array(l + 1).fill(0);
  dp[0] = 1;

  for (const num of nums) {
    for (let j = l; j >= 0; j--) {
      if (num <= j) {
        dp[j] = dp[j] + dp[j - num];
      }
    }
  }

  return dp[l];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Memoization - Top-down DP
var findTargetSumWays = function (nums, target) {
  const memo = new Map();

  function dfs(index, currentSum) {
    const key = `${index},${currentSum}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    if (index === nums.length) {
      return currentSum === target ? 1 : 0;
    }

    const add = dfs(index + 1, currentSum + nums[index]);
    const subtract = dfs(index + 1, currentSum - nums[index]);

    const result = add + subtract;
    memo.set(key, result);
    return result;
  }

  return dfs(0, 0);
};
