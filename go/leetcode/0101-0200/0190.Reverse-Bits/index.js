/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1); // shift result and add least significant bit
    n = n >>> 1; // unsigned right shift
  }
  return result >>> 0; // ensure unsigned 32-bit integer
}
