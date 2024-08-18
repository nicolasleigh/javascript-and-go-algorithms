/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    // If the length of the palindrome is odd
    res = maxPalindrome(s, i, i, res);
    // If the length of the palindrome is even
    res = maxPalindrome(s, i, i + 1, res);
  }

  return res;
}

function maxPalindrome(s, left, right, res) {
  let sub = "";

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    sub = s.substring(left, right + 1);
    left--;
    right++;
  }

  if (sub.length > res.length) {
    return sub;
  }

  return res;
}
