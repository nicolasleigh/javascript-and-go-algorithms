/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
function findLongestWord(s, dictionary) {
  // Sort the dictionary lexicographically
  dictionary.sort();

  let maxv = "";
  for (const word of dictionary) {
    if (match(s, word)) {
      if (word.length > maxv.length) {
        maxv = word;
      }
    }
  }
  return maxv;
}

// Helper function to check if `word` is a subsequence of `s`
function match(s, word) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < word.length) {
    if (s[i] === word[j]) {
      j++;
    }
    i++;
  }
  return j === word.length;
}
