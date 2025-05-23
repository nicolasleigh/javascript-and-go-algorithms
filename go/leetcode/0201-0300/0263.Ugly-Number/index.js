/**
 * @param {number} n
 * @return {boolean}
 */

function isUgly(num) {
  if (num > 0) {
    for (const factor of [2, 3, 5]) {
      while (num % factor === 0) {
        num /= factor;
      }
    }
  }
  return num === 1;
}
