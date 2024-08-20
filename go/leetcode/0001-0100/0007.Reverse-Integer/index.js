/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
  let tmp = 0;
  let sign = x < 0;
  x = Math.abs(x);
  while (x) {
    tmp = tmp * 10 + (x % 10);
    x = Math.floor(x / 10); // Math.floor(-1/10) = -1
  }
  if (tmp > Math.pow(2, 31) - 1 || tmp < -Math.pow(2, 31)) {
    return 0;
  }
  return sign ? -tmp : tmp;
}

console.log(reverse(-123));
