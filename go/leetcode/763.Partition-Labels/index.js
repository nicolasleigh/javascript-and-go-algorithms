/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const lastIndex = new Map();
  const result = [];

  // Step 1: Record the last index of each character
  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  // Step 2: Greedily partition
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex.get(s[i]));
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};
