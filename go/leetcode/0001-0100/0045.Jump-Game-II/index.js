// 45. Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */

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

// 45. Jump Game II
var jump = function (nums) {
  if (nums.length === 1) return 0;

  let steps = 0;
  let canReach = 0;
  let needChoose = 0;

  for (let i = 0; i < nums.length; i++) {
    canReach = Math.max(canReach, i + nums[i]);
    if (canReach >= nums.length - 1) {
      return steps + 1;
    }
    if (i === needChoose) {
      needChoose = canReach;
      steps++;
    }
  }

  return steps;
};
