// To minimize the total number of moves (i.e., the sum of absolute differences between each number and the target value),
// the optimal target is the median of the array.
// Why Median? Mathematically, the sum of absolute differences is minimized when all values are moved toward the median.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];

  return nums.reduce((acc, cur) => acc + Math.abs(cur - median), 0);
};
