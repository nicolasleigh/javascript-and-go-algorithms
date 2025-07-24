/**
 * @param {number[]} nums
 * @return {number[]}
 */

function singleNumber(nums) {
  let xor = 0;

  // Step 1: XOR all numbers to get xor = a ^ b (where a and b are the two unique numbers)
  for (const num of nums) {
    xor ^= num;
  }

  // Step 2: Find the rightmost set bit that differs between a and b
  // -xor: This is the two’s complement negation of xor.
  // In binary arithmetic, negating a number in two’s complement involves flipping all the bits and adding 1.
  let diffBit = xor & -xor;

  // Step 3: Partition numbers into two groups and XOR separately
  let a = 0;
  let b = 0;
  for (const num of nums) {
    if ((num & diffBit) === 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
}
