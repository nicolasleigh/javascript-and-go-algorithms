// 738. Monotone Increasing Digits
// https://leetcode.com/problems/monotone-increasing-digits/description/

/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = String(n)
    .split('')
    .map((item) => Number(item));

  let flag = Infinity;

  for (let i = n.length - 1; i > 0; i--) {
    if (n[i - 1] > n[i]) {
      n[i - 1]--;
      flag = i;
    }
  }

  for (let i = flag; i < n.length; i++) {
    n[i] = 9;
  }

  n = Number(n.join(''));
  return n;
};
