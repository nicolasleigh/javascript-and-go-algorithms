
/**
 * @param {string} s
 * @return {boolean}
*/

// 20. Valid Parentheses
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.pop() !== s[i]) {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
};
