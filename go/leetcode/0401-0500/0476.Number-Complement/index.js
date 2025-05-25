// Explanation:
// `mask` is the next power of two greater than `num`.
// Subtracting 1 from it gives a bitmask with all 1s of the same length as `num`.
// XOR (^) with the mask flips only the bits within num's length.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // Create a bitmask with all bits set to 1 (same length as num's bits)
  let mask = 1;
  while (mask <= num) {
    // When `num = 2^31 - 1`, gave the `Time Limit Exceeded` error
    mask = mask << 1;
  }

  return (mask - 1) ^ num;
};

var findComplement = function (num) {
  const binary = num.toString(2); // convert to binary string
  let flipped = "";
  for (let ch of binary) {
    flipped += ch === "0" ? "1" : "0";
  }
  return parseInt(flipped, 2);
};

var findComplement = function (num) {
  const mask = (1 << num.toString(2).length) - 1;
  return num ^ mask;
};
