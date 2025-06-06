/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  const half = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}
