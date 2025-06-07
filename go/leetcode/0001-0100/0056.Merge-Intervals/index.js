// 56. Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  let res = [];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (cur[0] > prev[1]) {
      // No overlap
      res.push(prev);
      prev = cur;
    } else {
      // Overlap, merge
      prev[1] = Math.max(cur[1], prev[1]);
    }
  }

  res.push(prev);
  return res;
};
