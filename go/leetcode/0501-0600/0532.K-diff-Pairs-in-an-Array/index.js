/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findPairs = function (nums, k) {
  if (k < 0) return 0; // Absolute difference cannot be negative

  const map = new Map();
  let count = 0;

  // Count frequencies
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [num, freq] of map) {
    if (k === 0) {
      // For k = 0, count elements appearing more than once
      if (freq > 1) count++;
    } else {
      // For k > 0, check if num + k exists
      if (map.has(num + k)) count++;
    }
  }

  return count;
};
