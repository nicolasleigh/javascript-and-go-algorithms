/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  const count = new Map();

  for (let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  let length = 0;
  let hasOdd = false;

  for (let val of count.values()) {
    if (val % 2 === 0) {
      length += val;
    } else {
      length += val - 1;
      hasOdd = true;
    }
  }

  return hasOdd ? length + 1 : length;
};
