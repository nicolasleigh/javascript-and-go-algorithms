// Key Idea: Sliding Window
// Use a sliding window to track a window of characters.
// Within the window, you’re allowed to change at most k characters.
// To check if a window is valid:
//  - If the number of chars to change = (window size - count of most frequent char) ≤ k

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Use Array as the frequency map
var characterReplacement = function (s, k) {
  // count: frequency of each character in current window.
  const count = new Array(26).fill(0);
  // maxFreq: frequency of the most common character in the window.
  let maxFreq = 0;
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - 65; // 'A' → 0
    count[idx]++;
    maxFreq = Math.max(maxFreq, count[idx]);

    // If the rest of the characters in the window can be changed (i.e., (window length - maxFreq) ≤ k), then the window is valid.
    // If not valid → shrink from the left.
    while (right - left + 1 - maxFreq > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};

// Use Object as the frequency map
var characterReplacement = function (s, k) {
  const count = {};
  let maxFreq = 0;
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    let charR = s[right];
    let charL = s[left];
    count[charR] = (count[charR] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[charR]);

    while (right - left + 1 - maxFreq > k) {
      count[charL]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};
