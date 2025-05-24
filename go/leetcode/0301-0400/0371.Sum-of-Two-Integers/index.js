/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// a ^ b gives the sum without carry.
// (a & b) << 1 gives the carry.
// Repeat the process until there's no carry (b === 0).

function getSum(a, b) {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}
