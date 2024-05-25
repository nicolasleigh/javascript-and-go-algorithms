// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/description/
// https://leetcode.com/problems/next-greater-element-i/solutions/97595/java-10-lines-linear-time-complexity-o-n-with-explanation/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];

  for (let num of nums2) {
    if (num <= stack.at(-1)) {
      stack.push(num);
    } else {
      while (stack.length && num > stack.at(-1)) {
        let top = stack.pop();
        map.set(top, num);
      }
      stack.push(num);
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
  }

  return nums1;
};
