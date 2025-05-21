/**
 * @param {number} n
 * @return {number}
 */

function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1; // Add 1 if the least significant bit is 1
    n = n >>> 1; // Unsigned right shift to move to the next bit
  }
  return count;
}
