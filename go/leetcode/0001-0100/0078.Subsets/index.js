// 78. Subsets
// https://leetcode.com/problems/subsets/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var subsets = function (nums) {
  let res = [];
  let comb = [];

  function backtrack(start) {
    res.push([...comb]);

    for (let i = start; i < nums.length; i++) {
      comb.push(nums[i]);
      backtrack(i + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
};
