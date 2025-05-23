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

  // Step 2: Find any set bit (we use the rightmost set bit)
  let diffBit = xor & -xor;

  // Step 3: Partition numbers into two groups and XOR separately
  let a = 0,
    b = 0;
  for (const num of nums) {
    if ((num & diffBit) === 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
}
