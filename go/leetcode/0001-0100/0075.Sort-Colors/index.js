/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 75. Sort Colors
var sortColors = function (nums) {
  let zeros = 0;
  let ones = 0;

  // Count 0s and 1s
  for (let v of nums) {
    if (v === 0) {
      zeros++;
    } else if (v === 1) {
      ones++;
    }
  }

  // Fill in 0s
  for (let i = 0; i < zeros; i++) {
    nums[i] = 0;
  }

  // Fill in 1s
  for (let i = zeros; i < zeros + ones; i++) {
    nums[i] = 1;
  }

  // Fill in 2s
  for (let i = zeros + ones; i < nums.length; i++) {
    nums[i] = 2;
  }
};
