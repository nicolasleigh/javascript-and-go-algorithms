// 17. Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res = [];
  const comb = [];
  const k = digits.length;
  if (!digits) return [];

  // n is the index of the digit in the input
  function backtrack(n) {
    let index = digits[n];

    if (n === k) {
      res.push(comb.join(""));
      return;
    }

    if (k === 1) {
      res.push(...map[digits[0]].split(""));
      return;
    }

    for (let i = 0; i < map[index].length; i++) {
      comb.push(map[index][i]);
      backtrack(n + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
};
