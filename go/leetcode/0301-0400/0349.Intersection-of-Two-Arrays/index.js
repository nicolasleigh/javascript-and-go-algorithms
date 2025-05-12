// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let nums1Set = new Set(nums1);
  let resSet = new Set();
  for (let i of nums2) {
    if (nums1Set.has(i)) {
      resSet.add(i);
    }
  }
  return Array.from(resSet);
};

var intersection2 = function (nums1, nums2) {
  return Array.from(new Set(nums1.filter((i) => nums2.includes(i))));
};
