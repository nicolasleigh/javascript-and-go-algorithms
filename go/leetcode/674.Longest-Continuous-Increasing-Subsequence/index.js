/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let dp = new Array(nums.length).fill(1);

  // dp[i] means the length of the longest continuous increasing subsequence ending with nums[i]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return Math.max(...dp);
};

var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0;

  let maxLen = 1;
  let currentLen = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 1;
    }
  }

  return maxLen;
};
