/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  const s = x.toString();
  const length = s.length;

  for (let i = 0; i <= Math.floor(length / 2); i++) {
    if (s[i] !== s[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
