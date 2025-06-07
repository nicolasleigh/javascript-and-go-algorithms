/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let index;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    index = map.get(target - nums[i]);

    if (index !== undefined) {
      result = [i, index];
      break;
    }

    map.set(nums[i], i);
  }

  return result;
};
