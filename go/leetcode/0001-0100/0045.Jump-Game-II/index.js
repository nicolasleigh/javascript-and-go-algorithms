// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: nums = [2,3,1,1,4]
// Output: 2

var jump = function (nums) {
  const size = nums.length;
  let destination = size - 1;
  let curCoverage = 0;
  let lastJumpIdx = 0;
  let timesOfJump = 0;

  if (size == 1) return 0;

  // Greedy strategy: extend coverage as long as possible with lazy jump
  for (let i = 0; i < size; i++) {
    // extend coverage
    curCoverage = Math.max(curCoverage, i + nums[i]);

    // forced to jump (by lazy jump) to extend coverage
    if (i == lastJumpIdx) {
      lastJumpIdx = curCoverage;
      timesOfJump++;

      // check if we reached destination already
      if (lastJumpIdx >= destination) {
        return timesOfJump;
      }
    }
  }

  return timesOfJump;
};
