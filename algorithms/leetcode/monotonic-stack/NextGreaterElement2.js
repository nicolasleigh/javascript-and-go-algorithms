// 503. Next Greater Element II
// https://leetcode.com/problems/next-greater-element-ii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Can not use map, because the value of nums may be duplicated
// [100,1,11,1,120,111,123,1,-1,-100]
var nextGreaterElements = function (nums) {
  let temp = nums.concat(nums);
  let stack = [];
  let res = new Array(nums.length).fill(-1);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] <= temp[stack.at(-1)]) {
      stack.push(i);
    } else {
      while (stack.length && temp[i] > temp[stack.at(-1)]) {
        let top = stack.pop();
        res[top] = temp[i];
      }
      stack.push(i);
    }
  }

  return res.slice(0, nums.length);
};

var nextGreaterElements = function (nums) {
  let stack = [];
  let res = new Array(nums.length).fill(-1);
  let len = nums.length;

  for (let i = 0; i < len * 2; i++) {
    while (stack.length && nums[i % len] > nums[stack.at(-1)]) {
      let top = stack.pop();
      res[top] = nums[i % len];
    }
    stack.push(i % len);
  }
  return res;
};
