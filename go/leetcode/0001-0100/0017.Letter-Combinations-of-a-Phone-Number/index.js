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
    let num = digits[n];

    if (n === k) {
      res.push(comb.join(""));
      return;
    }

    if (k === 1) {
      res.push(...map[digits[0]].split(""));
      return;
    }

    for (let i = 0; i < map[num].length; i++) {
      comb.push(map[num][i]);
      backtrack(n + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
};

var letterCombinations = function (digits) {
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const res = [];
  const comb = [];
  const k = digits.length;
  if (!digits) return [];

  function backtrack(n) {
    if (n === k) {
      res.push(comb.join(""));
      return;
    }

    const letters = map[digits[n]];
    for (let i = 0; i < letters.length; i++) {
      comb.push(letters[i]);
      backtrack(n + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
};
