/**
 * @param {number} num
 * @return {boolean}
 */

function isPowerOfThree(num) {
  while (num >= 3) {
    if (num % 3 === 0) {
      num = num / 3;
    } else {
      return false;
    }
  }
  return num === 1;
}
