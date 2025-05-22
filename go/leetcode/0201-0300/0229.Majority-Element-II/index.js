/**
 * @param {number[]} nums
 * @return {number}
 */

// Similar to 0169
var majorityElement = function (nums) {
  const countMap = new Map();
  const result = new Set();
  const majority = Math.floor(nums.length / 3);

  for (const num of nums) {
    const count = (countMap.get(num) || 0) + 1;
    countMap.set(num, count);
    if (count > majority) {
      result.add(num);
    }
  }

  return Array.from(result);
};
