/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) return false;

  const freqS1 = {};
  const freqS2 = {};

  // Build freqS1 map
  for (const c of s1) {
    freqS1[c] = (freqS1[c] || 0) + 1;
  }

  let left = 0,
    right = 0;

  while (right < s2.length) {
    const charRight = s2[right];
    freqS2[charRight] = (freqS2[charRight] || 0) + 1;

    const windowSize = right - left + 1;

    if (windowSize === s1.length) {
      if (isMatch(freqS1, freqS2)) return true;

      const charLeft = s2[left];
      freqS2[charLeft]--;
      if (freqS2[charLeft] === 0) {
        delete freqS2[charLeft]; // Clean up to keep map small
      }
      left++;
    }

    right++;
  }

  return false;
};

// Helper function to compare two frequency maps
function isMatch(freq1, freq2) {
  for (const char in freq1) {
    if (freq1[char] !== freq2[char]) return false;
  }

  return true;
}
