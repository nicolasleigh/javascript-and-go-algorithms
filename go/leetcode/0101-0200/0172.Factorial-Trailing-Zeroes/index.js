/**
 * @param {number} n
 * @return {number}
 */
// Question: How many 5s are there in the factorial of 25?
// You may guess the answer is 25 / 5 = 5, however there are actually 6.
// Here are all the multiples of 5 in the factorial of 25:
// 5, 10, 15, 20, 25
// Another way to write this is:
// (5 * 1), (5 * 2), (5 * 3), (5 * 4), (5 * 5)
// As you can see, 5 is actually multiplied 6 times.
// We can simplify the answer to the Factorial Trailing Zeroes question to the following:
// (n / 5) + (n / 5^2) + (n / 5^3)... (n / 5^x)
var trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};
