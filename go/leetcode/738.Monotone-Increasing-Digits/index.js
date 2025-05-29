/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = String(n)
    .split("")
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

  n = Number(n.join(""));
  return n;
};

var monotoneIncreasingDigits = function (n) {
  const digits = String(n).split("").map(Number);
  let mark = digits.length;

  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] < digits[i - 1]) {
      digits[i - 1]--;
      mark = i;
    }
  }

  for (let i = mark; i < digits.length; i++) {
    digits[i] = 9;
  }

  return parseInt(digits.join(""));
};
