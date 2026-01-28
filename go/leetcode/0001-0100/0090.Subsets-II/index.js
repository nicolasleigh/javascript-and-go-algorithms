/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 90. Subsets II
var subsetsWithDup = function (nums) {
  let res = [];
  let comb = [];
  nums.sort((a, b) => a - b); // NEW

  function backtrack(start) {
    res.push([...comb]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue; // NEW

      comb.push(nums[i]);
      backtrack(i + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
};
