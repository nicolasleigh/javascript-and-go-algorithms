/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// 57. Insert Interval
var insert = function (intervals, newInterval) {
  // Step 1: Add the new interval to the list
  intervals.push(newInterval);

  // Step 2: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 3: Merge intervals
  const res = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    if (cur[0] > prev[1]) {
      // No overlap
      res.push(prev);
      prev = cur;
    } else {
      // Overlap, merge
      prev[1] = Math.max(prev[1], cur[1]);
    }
  }

  // Step 4: Push the last interval
  res.push(prev);

  return res;
};
