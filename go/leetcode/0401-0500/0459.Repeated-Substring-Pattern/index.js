// 459. Repeated Substring Pattern
// https://leetcode.com/problems/repeated-substring-pattern/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const doubled = s + s;
  const sub = doubled.slice(1, -1);
  return sub.includes(s);
};
