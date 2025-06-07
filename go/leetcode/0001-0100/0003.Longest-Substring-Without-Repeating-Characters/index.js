/**
 * @param {string} s
 * @return {number}
 */

// Sliding window
function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;

  const bitSet = new Array(128).fill(false); // ASCII length, that is 2^7 = 128
  let res = 0;
  let l = 0;
  let r = 0;

  while (l < s.length) {
    // If bitSet is true, represents this character already in the window, so we need to move l forward until this character is not in the window
    if (bitSet[s.charCodeAt(r)]) {
      bitSet[s.charCodeAt(l)] = false;
      l++;
    } else {
      bitSet[s.charCodeAt(r)] = true;
      r++;
      res = Math.max(res, r - l); // Calculate the maximum length of the substring
    }

    // Avoid index out of range error
    if (r >= s.length) {
      break;
    }
  }

  return res;
}
