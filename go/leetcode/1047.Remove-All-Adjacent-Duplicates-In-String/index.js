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

  const result = stack.join("");

  return result;
};

var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop(); // remove duplicate
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
