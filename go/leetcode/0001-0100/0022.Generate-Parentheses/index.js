/**
 * @param {number} n
 * @return {string[]}
 */
// 22. Generate Parentheses
function generateParenthesis(n) {
  const res = [];
  if (n === 0) return res;

  function backtrack(left, right, str) {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }

    if (left > 0) {
      backtrack(left - 1, right, str + "(");
    }

    if (right > 0 && left < right) {
      backtrack(left, right - 1, str + ")");
    }
  }

  backtrack(n, n, "");
  return res;
}
