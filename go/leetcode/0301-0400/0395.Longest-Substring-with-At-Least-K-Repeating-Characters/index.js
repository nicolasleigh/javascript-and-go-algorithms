/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestSubstring = function (s, k) {
  if (s.length === 0 || k > s.length) return 0;

  // Count frequency
  const count = {};
  for (let ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] < k) {
      // Split and recurse
      const left = longestSubstring(s.slice(0, i), k);
      const right = longestSubstring(s.slice(i + 1), k);
      return Math.max(left, right);
    }
  }

  return s.length; // All characters occur >= k
};

// // Sliding Window
// var longestSubstring = function (s, k) {
//   let maxLen = 0;

//   for (let uniqueTarget = 1; uniqueTarget <= 26; uniqueTarget++) {
//     const count = new Array(26).fill(0);
//     let left = 0,
//       right = 0;
//     let unique = 0; // number of unique characters in window
//     let countAtLeastK = 0; // number of chars with freq >= k

//     while (right < s.length) {
//       if (unique <= uniqueTarget) {
//         const idx = s.charCodeAt(right) - 97;
//         if (count[idx] === 0) unique++;
//         count[idx]++;
//         if (count[idx] === k) countAtLeastK++;
//         right++;
//       } else {
//         const idx = s.charCodeAt(left) - 97;
//         if (count[idx] === k) countAtLeastK--;
//         count[idx]--;
//         if (count[idx] === 0) unique--;
//         left++;
//       }

//       if (unique === uniqueTarget && unique === countAtLeastK) {
//         maxLen = Math.max(maxLen, right - left);
//       }
//     }
//   }

//   return maxLen;
// };
