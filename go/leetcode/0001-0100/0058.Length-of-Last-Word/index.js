/**
 * @param {string} s
 * @return {number}
 */

// 58. Length of Last Word
var lengthOfLastWord = function (s) {
  s = s.trim(); // Remove leading and trailing spaces
  const words = s.split(" "); // Split by space
  const lastWord = words[words.length - 1];
  return lastWord.length;
};
