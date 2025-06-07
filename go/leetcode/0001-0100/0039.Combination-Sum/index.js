// 39. Combination Sum

/**
 * @param {iber[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
var combinationSum = function (candidates, target) {
  const res = [];
  const comb = [];
  let sum = 0;

  function backtrack(start) {
    if (sum > target) return;

    if (sum === target) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      comb.push(candidates[i]);
      sum += candidates[i];
      backtrack(i);
      comb.pop();
      sum -= candidates[i];
    }
  }

  backtrack(0);
  return res;
};
