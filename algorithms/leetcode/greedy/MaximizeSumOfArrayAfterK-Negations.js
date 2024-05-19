// 1005. Maximize Sum Of Array After K Negations
// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  while (k > 0) {
    nums[0] = -nums[0];
    k--;
  }

  let res = nums.reduce((acc, cur) => acc + cur, 0);
  return res;
};
