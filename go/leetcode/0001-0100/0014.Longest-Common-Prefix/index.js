/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  // Sort by string length
  strs.sort((a, b) => a.length - b.length);

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    prefix = strs[0].slice(0, i + 1);
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) {
        return prefix.slice(0, -1); // Remove last character
      }
    }
  }

  return prefix;
}
