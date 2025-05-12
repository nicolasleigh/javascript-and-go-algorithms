// 46. Permutations
// https://leetcode.com/problems/permutations/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function (nums) {
  let res = [];
  let comb = [];
  let usedSet = new Set();

  function backtrack() {
    if (comb.length === nums.length) {
      res.push([...comb]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (usedSet.has(nums[i])) continue;

      usedSet.add(nums[i]);
      comb.push(nums[i]);
      backtrack();
      comb.pop();
      usedSet.delete(nums[i]);
    }
  }

  backtrack();
  return res;
};
