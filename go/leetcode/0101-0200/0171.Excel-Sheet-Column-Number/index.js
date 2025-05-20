/**
 * @param {string} columnTitle
 * @return {number}
 */
// Solution 1 - from left to right
var titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const val = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result = result * 26 + val;
  }

  return result;
};

// Solution 2 - from right to left
var titleToNumber = function (columnTitle) {
  let result = 0;
  let power = 1;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const val = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result += val * power;
    power *= 26;
  }

  return result;
};
