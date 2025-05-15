/**
 * @param {string} s
 * @return {number}
 */

// Solution 1: Stack
var longestValidParentheses = function (s) {
  let stack = [-1]; // Stack stores indices, initialize with -1 to handle edge cases
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        res = Math.max(res, i - stack[stack.length - 1]);
      }
    }
  }

  return res;
};

// Solution 2: Dynamic Programming
var longestValidParentheses = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0);
  let res = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        // Case: "()", add 2 to dp[i - 2] if it exists
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === "(") {
        // Case: "))" with matching "(", like "(())"
        dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
      }
      res = Math.max(res, dp[i]);
    }
  }

  return res;
};
