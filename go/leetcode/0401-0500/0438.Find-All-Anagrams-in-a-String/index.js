/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  const aCharCode = "a".charCodeAt(0);

  // Initialize frequency for p
  for (let char of p) {
    pCount[char.charCodeAt(0) - aCharCode]++;
  }

  const windowSize = p.length;

  for (let i = 0; i < s.length; i++) {
    // Add current character to window count
    sCount[s.charCodeAt(i) - aCharCode]++;

    // Remove the leftmost character when window exceeds size
    if (i >= windowSize) {
      sCount[s.charCodeAt(i - windowSize) - aCharCode]--;
    }

    // Compare counts
    if (arraysEqual(sCount, pCount)) {
      result.push(i - windowSize + 1);
    }
  }

  return result;
};

// Helper to compare two frequency arrays
function arraysEqual(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
