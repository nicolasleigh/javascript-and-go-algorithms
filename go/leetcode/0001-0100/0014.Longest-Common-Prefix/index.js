/**
 * @param {string[]} strs
 * @return {string}
 */

// 14. Longest Common Prefix
function longestCommonPrefix(strs) {
  // Make sure the strs[0] is the shortest string
  strs.sort((a, b) => a.length - b.length);

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    prefix = strs[0].slice(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) {
        return prefix.slice(0, -1); // Remove last character
      }
    }
  }

  return prefix;
}
