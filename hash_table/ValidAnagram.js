// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let helperArr = new Array(26).fill(0);
  let pivot = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    helperArr[s.charCodeAt(i) - pivot]++;
    helperArr[t.charCodeAt(i) - pivot]--;
  }
  return helperArr.every((i) => i === 0);
};

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of t) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
};
