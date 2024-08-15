/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let index;
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
    index = map.get(target - nums[i]);
    if (index !== undefined) {
      resArr = [i, index];
      break;
    }
    map.set(nums[i], i);
  }
  return resArr;
};
