/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
  let xor = x ^ y;
  let count = 0;

  while (xor !== 0) {
    count += xor & 1; // Add 1 if the last bit is 1
    xor = xor >>> 1; // Unsigned right shift
  }

  return count;
};
