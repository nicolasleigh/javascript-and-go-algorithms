// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

var strStr2 = function (haystack, needle) {
  const regex = new RegExp(needle);
  return haystack.search(regex);
};

var strStr3 = function (haystack, needle) {
  let haystackLength = haystack.length;
  let needleLength = needle.length;
  if (haystackLength < needleLength) return -1;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    const substring = haystack.substring(i, i + needleLength);
    if (substring === needle) return i;
  }
  return -1;
};
