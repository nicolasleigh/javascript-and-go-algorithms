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

// Solution 2
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  // Helper to solve House Robber I
  const rob1 = (nums) => {
    // dp[i] represents the largest value can be robbed from nums[0] to nums[i]
    let dp = new Array(nums.length).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]); // Represent not rob nums[i] versus rob nums[i]
    }

    return dp[nums.length - 1];
  };

  // Case 1: Rob from house 0 to n-2
  // Case 2: Rob from house 1 to n-1
  return Math.max(rob1(nums.slice(0, nums.length - 1)), rob1(nums.slice(1)));
};
