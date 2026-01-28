/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 66. Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] !== 10) {
      // No carry needed
      return digits;
    }
    // Carry over
    digits[i] = 0;
  }

  // All digits were 9 (e.g., 999 → 1000), so prepend 1
  digits.unshift(1);
  return digits;
};
