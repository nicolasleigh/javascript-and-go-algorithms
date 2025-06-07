// 46. Permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

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
