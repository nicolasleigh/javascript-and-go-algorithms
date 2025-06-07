// 47. Permutations II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let comb = [];
  nums.sort((a, b) => a - b); // Step 1: sort to detect duplicates
  // let usedSet = new Set(); // Can not use Set
  let usedArr = new Array(nums.length).fill(false); // NEW // Step 2: track used indexes

  function backtrack() {
    if (comb.length === nums.length) {
      res.push([...comb]); // copy current combination
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (usedArr[i]) continue; // already used in current permutation
      // NEW
      // Step 3: skip duplicate values at the same tree level
      if (i > 0 && nums[i] === nums[i - 1] && !usedArr[i - 1]) continue;

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
