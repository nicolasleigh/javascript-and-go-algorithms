// 242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let count = new Array(26).fill(0);
  let pivot = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - pivot]++;
    count[t.charCodeAt(i) - pivot]--;
  }

  return count.every((i) => i === 0);
};

// Solution 2
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

// Solution 3
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (const c of count) {
    if (c !== 0) return false;
  }

  return true;
}
