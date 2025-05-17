/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const m = new Map();

  // Count frequency of each character in t
  for (let char of t) {
    m.set(char, (m.get(char) || 0) + 1);
  }

  let start = 0;
  let end = 0;
  let counter = t.length;
  let minStart = 0;
  let minLen = s.length + 1;

  while (end < s.length) {
    const endChar = s[end];
    if (m.has(endChar)) {
      if (m.get(endChar) > 0) counter--;
      m.set(endChar, m.get(endChar) - 1);
    }
    end++;

    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }

      const startChar = s[start];
      if (m.has(startChar)) {
        m.set(startChar, m.get(startChar) + 1);
        if (m.get(startChar) > 0) counter++;
      }
      start++;
    }
  }

  return minLen === s.length + 1 ? "" : s.slice(minStart, minStart + minLen);
};
