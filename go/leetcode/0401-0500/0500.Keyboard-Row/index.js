/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const s1 = "qwertyuiop";
  const s2 = "asdfghjkl";
  const s3 = "zxcvbnm";

  const map = {};

  for (const ch of s1) {
    map[ch] = 1;
  }
  for (const ch of s2) {
    map[ch] = 2;
  }
  for (const ch of s3) {
    map[ch] = 3;
  }

  const res = [];

  for (const word of words) {
    const lower = word.toLowerCase();
    let sameLine = true;

    for (let i = 1; i < lower.length; i++) {
      const first = lower[0];
      const cur = lower[i];

      if (map[cur] !== map[first]) {
        sameLine = false;
        break;
      }
    }

    if (sameLine) {
      res.push(word);
    }
  }

  return res;
};
