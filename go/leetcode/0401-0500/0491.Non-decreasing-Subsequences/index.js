/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var findSubsequences = function (nums) {
  let res = [];
  let comb = [];

  function backtrack(start) {
    let usedSet = new Set();
    if (comb.length > 1) {
      res.push([...comb]);
    }

    for (let i = start; i < nums.length; i++) {
      if (usedSet.has(nums[i]) || nums[i] < comb.at(-1)) continue;

      usedSet.add(nums[i]);
      comb.push(nums[i]);
      backtrack(i + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
};
