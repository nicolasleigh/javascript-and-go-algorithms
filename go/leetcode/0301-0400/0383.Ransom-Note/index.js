/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let result = new Array(26).fill(0);
  let base = "a".charCodeAt(0);
  for (let char of magazine) {
    let index = char.charCodeAt(0) - base;
    result[index]++;
  }
  for (let char of ransomNote) {
    let index = char.charCodeAt(0) - base;
    if (!result[index]) return false;
    result[index]--;
  }
  return true;
};

var canConstruct = function (ransomNote, magazine) {
  const count = {};

  // Count letters in magazine
  for (let ch of magazine) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Use letters for ransomNote
  for (let ch of ransomNote) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
};
