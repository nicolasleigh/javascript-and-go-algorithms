/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  // Sort by end
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      // Overlap → remove this one (count it)
      count++;
    } else {
      // No overlap → keep it and update end time
      prevEnd = intervals[i][1];
    }
  }

  return count;
};
