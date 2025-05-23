/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (words.length !== pattern.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWord.has(char)) {
      if (charToWord.get(char) !== word) return false;
    } else {
      if (wordToChar.has(word)) return false;
      charToWord.set(char, word);
      wordToChar.set(word, char);
    }
  }

  return true;
}
