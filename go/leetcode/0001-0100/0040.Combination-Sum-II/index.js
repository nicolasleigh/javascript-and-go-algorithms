// 40. Combination Sum II

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  const res = [];
  const comb = [];
  let sum = 0;
  candidates.sort((a, b) => a - b); // NEW

  function backtrack(start) {
    if (sum > target) return;

    if (sum === target) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue; // NEW
      comb.push(candidates[i]);
      sum += candidates[i];
      backtrack(i + 1);
      comb.pop();
      sum -= candidates[i];
    }
  }

  backtrack(0);
  return res;
};
