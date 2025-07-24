/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const doubled = s + s;
  const sub = doubled.slice(1, -1);
  return sub.includes(s);
};

var repeatedSubstringPattern = function (s) {
  const n = s.length;

  for (let len = 1; len <= Math.floor(n / 2); len++) {
    if (n % len === 0) {
      const substr = s.slice(0, len);
      const repeated = substr.repeat(n / len);
      if (repeated === s) {
        return true;
      }
    }
  }

  return false;
};
