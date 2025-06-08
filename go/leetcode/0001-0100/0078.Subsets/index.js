// 78. Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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
