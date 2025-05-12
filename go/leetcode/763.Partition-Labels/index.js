// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/description/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let lastIdx = new Map();
  let res = [];
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    lastIdx.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, lastIdx.get(s[i]));

    if (i === right) {
      res.push(right - left + 1);
      left = i + 1;
    }
  }
  return res;
};
