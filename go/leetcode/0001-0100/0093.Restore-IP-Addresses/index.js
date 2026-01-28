/**
 * @param {string} s
 * @return {string[]}
 */
// 93. Restore IP Addresses
var restoreIpAddresses = function (s) {
  let res = [];
  let comb = [];

  function isValidIpSegment(str) {
    let num = Number(str);
    if (str.length === 0 || isNaN(num) || num > 255 || num < 0 || (str.length > 1 && str.startsWith(0))) {
      return false;
    }
    return true;
  }

  function backtrack(start) {
    if (comb.length === 4 && start >= s.length) {
      res.push(comb.join("."));
      return;
    }

    if (comb.length === 4 || start >= s.length) return;

    for (let i = start; i < Math.min(s.length, start + 3); i++) {
      const substr = s.slice(start, i + 1);
      if (isValidIpSegment(substr)) {
        comb.push(substr);
        backtrack(i + 1);
        comb.pop();
      }
    }
  }

  backtrack(0);
  return res;
};
