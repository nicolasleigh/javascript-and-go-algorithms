/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {
  let n = nums.length;
  let start = -1;
  let end = -2; // initialize for edge case when array is already sorted
  let min = nums[n - 1];
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) end = i;

    min = Math.min(min, nums[n - 1 - i]);
    if (nums[n - 1 - i] > min) start = n - 1 - i;
  }

  return end - start + 1;
};
