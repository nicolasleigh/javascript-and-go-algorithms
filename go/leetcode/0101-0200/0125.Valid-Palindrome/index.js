/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !isChar(s[i])) i++;
    while (i < j && !isChar(s[j])) j--;

    if (s[i] !== s[j]) return false;

    i++;
    j--;
  }

  return true;
}

function isChar(c) {
  return /[a-z0-9]/.test(c);
}
