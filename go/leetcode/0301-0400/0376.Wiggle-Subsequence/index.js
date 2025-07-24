/**
 * @param {number[]} nums
 * @return {number}
 */
// Greedy
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length;

  let result = 1;
  let preDiff = 0;
  let curDiff = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      result++;
      preDiff = curDiff;
    }
  }
  return result;
};

// DP
// up tracks the longest subsequence ending with an upward wiggle.
// down tracks the longest subsequence ending with a downward wiggle.
// Every time you see an up, you can extend a previous down subsequence and vice versa.
function wiggleMaxLength(nums) {
  if (nums.length < 2) return nums.length;

  let up = 1;
  let down = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }

  return Math.max(up, down);
}
