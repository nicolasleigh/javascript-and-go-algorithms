/**
 * @param {number} n
 * @return {boolean}
 */

function isPowerOfTwo(n) {
  for (let i = 0; i < 31; i++) {
    const res = Math.pow(2, i);
    if (res === n) return true;
    if (res > n) break;
  }
  return false;
}

// A power of two has exactly one 1 bit in binary (e.g., 2 => 10, 4 => 100, 8 => 1000).
// Subtracting 1 flips that one 1 bit and all the bits after it.
// Doing n & (n - 1) will be 0 only if n was a power of two.
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
