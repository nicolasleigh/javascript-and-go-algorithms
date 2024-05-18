// 47. Permutations II
// https://leetcode.com/problems/permutations-ii/description/
// Reference: https://programmercarl.com/0047.%E5%85%A8%E6%8E%92%E5%88%97II.html#%E6%80%9D%E8%B7%AF

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Input: nums = [1, 1, 2];
// Output: [
//   [1, 1, 2],
//   [1, 2, 1],
//   [2, 1, 1],
// ];
var permuteUnique = function (nums) {
  let res = [];
  let comb = [];
  nums.sort((a, b) => a - b);
  // let usedSet = new Set(); // Can not use Set
  let usedArr = new Array(nums.length).fill(false); // NEW

  function backtrack() {
    if (comb.length === nums.length) {
      res.push([...comb]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (usedArr[i] === true) continue;
      // NEW
      // "usedArr[i - 1] === true" also work, but false is better, see reference link above
      if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1] === false)
        continue;

      usedArr[i] = true;
      comb.push(nums[i]);
      backtrack();
      comb.pop();
      usedArr[i] = false;
    }
  }

  backtrack();
  return res;
};
