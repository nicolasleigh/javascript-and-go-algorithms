// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }

  const result = stack.join('');

  return result;
};
