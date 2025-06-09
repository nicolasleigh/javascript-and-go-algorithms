// 127. Word Ladder
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [];
  let visitMap = new Map();
  queue.push(beginWord);
  visitMap.set(beginWord, 1);

  while (queue.length) {
    let word = queue.shift();
    let path = visitMap.get(word);
    if (word === endWord) return path;

    for (let i = 0; i < word.length; i++) {
      for (let char = 97; char <= 122; char++) {
        let wordArr = word.split("");
        wordArr[i] = String.fromCharCode(char);
        let str = wordArr.join("");
        if (wordSet.has(str) && !visitMap.has(str)) {
          queue.push(str);
          visitMap.set(str, path + 1);
        }
      }
    }
  }
  return 0;
};
