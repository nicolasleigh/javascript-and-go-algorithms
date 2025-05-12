// 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii/description/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const comb = [];
  let sum = 0;

  if (sum > n) return;

  function backtrack(start) {
    if (comb.length === k) {
      if (sum === n) {
        res.push([...comb]);
      }
      return;
    }

    for (let num = start; num <= 9; num++) {
      comb.push(num);
      sum += num;
      backtrack(num + 1);
      comb.pop();
      sum -= num;
    }
  }

  backtrack(1);
  return res;
};
