/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

function findSubstring(s, words) {
  if (words.length === 0) return [];

  const wordLen = words[0].length;
  const totalLen = wordLen * words.length;
  const wordCount = buildWordMap(words);
  const result = [];

  for (let i = 0; i <= s.length - totalLen; i++) {
    const seen = {};
    let j = 0;
    while (j < words.length) {
      const word = s.substr(i + j * wordLen, wordLen);
      if (!(word in wordCount)) break;

      seen[word] = (seen[word] || 0) + 1;
      if (seen[word] > wordCount[word]) break;

      j++;
    }

    if (j === words.length) {
      result.push(i);
    }
  }

  return result;
}

function buildWordMap(words) {
  const map = {};
  for (const word of words) {
    map[word] = (map[word] || 0) + 1;
  }
  return map;
}
