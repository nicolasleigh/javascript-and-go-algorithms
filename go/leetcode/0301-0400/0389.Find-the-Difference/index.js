// Solution 1 - Frequency Counting
var findTheDifference = function (s, t) {
  const count = {};

  for (let ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!count[ch]) return ch;
    count[ch]--;
  }

  return ""; // shouldn't reach here
};

// Solution 2 - ASCII Sum Difference
var findTheDifference = function (s, t) {
  let sumS = 0;
  let sumT = 0;

  for (let ch of s) sumS += ch.charCodeAt(0);
  for (let ch of t) sumT += ch.charCodeAt(0);

  return String.fromCharCode(sumT - sumS);
};

// Solution 3 - XOR
var findTheDifference = function (s, t) {
  let res = 0;

  for (let ch of s) res ^= ch.charCodeAt(0);
  for (let ch of t) res ^= ch.charCodeAt(0);

  return String.fromCharCode(res);
};
