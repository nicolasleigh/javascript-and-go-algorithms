/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  const count = {};

  // Count each character
  for (let ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Find the first character with count 1
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }

  return -1;
};
