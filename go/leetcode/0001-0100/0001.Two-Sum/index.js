/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. Two Sum 
var twoSum = function (nums, target) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      result = [map.get(diff), i];
      break;
    }

    map.set(nums[i], i);
  }

  return result;
};
