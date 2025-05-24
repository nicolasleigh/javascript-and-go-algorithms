/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

var removeKdigits = function (num, k) {
  const stack = [];

  for (let digit of num) {
    // While the current digit is smaller than the top of the stack,
    // and we still need to remove digits, pop the stack.
    while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // If k > 0, remove remaining digits from the end
  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros
  let result = stack.join("").replace(/^0+/, "");

  return result === "" ? "0" : result;
};
