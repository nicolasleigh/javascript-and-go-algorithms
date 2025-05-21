/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

function rangeBitwiseAnd(left, right) {
  let count = 0;

  while (left !== right) {
    left >>= 1;
    right >>= 1;
    count++;
  }

  return left << count;
}
