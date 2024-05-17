// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/description/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let comb = [];
  let res = [];

  function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  function backtrack(start) {
    if (start === s.length) {
      res.push([...comb]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const sub = s.substring(start, i + 1);
      if (isPalindrome(sub)) {
        comb.push(sub);
        backtrack(i + 1);
        comb.pop();
      }
    }
  }

  backtrack(0);
  return res;
};
