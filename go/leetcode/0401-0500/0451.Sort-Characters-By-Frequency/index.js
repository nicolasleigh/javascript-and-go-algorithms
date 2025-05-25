/**
 * @param {string} s
 * @return {string}
 */

// Sorting
var frequencySort = function (s) {
  // Step 1: Build frequency map
  const freqMap = {};
  for (let char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Step 2: Convert map to array and sort by frequency
  const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

  // Step 3: Build result string
  let result = "";
  for (let char of sortedChars) {
    result += char.repeat(freqMap[char]);
  }

  return result;
};

// Bucket Sort
var frequencySort = function (s) {
  const freqMap = {};

  // Step 1: Count frequency of each character
  for (let char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Step 2: Create buckets where index = frequency
  const buckets = Array(s.length + 1)
    .fill()
    .map(() => []);

  for (let char in freqMap) {
    const freq = freqMap[char];
    buckets[freq].push(char);
  }

  // Step 3: Build result from buckets, from high freq to low
  let result = "";
  for (let i = buckets.length - 1; i > 0; i--) {
    for (let char of buckets[i]) {
      result += char.repeat(i);
    }
  }

  return result;
};
