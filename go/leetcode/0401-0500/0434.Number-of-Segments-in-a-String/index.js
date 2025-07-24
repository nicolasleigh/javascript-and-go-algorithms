/**
 * @param {string} s
 * @return {number}
 */

var countSegments = function (s) {
  return s.split(" ").filter((segment) => segment.length > 0).length;
};

var countSegments = function (s) {
  return s.split(" ").filter(Boolean).length;
};

var countSegments = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
      count++;
    }
  }
  return count;
};
