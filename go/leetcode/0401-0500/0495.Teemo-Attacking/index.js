/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    // Calculate the time difference between this attack and the next one
    let diff = timeSeries[i + 1] - timeSeries[i];
    // If the next attack comes before the poison ends, only count that difference
    total += Math.min(diff, duration);
  }

  // Add the full duration for the last attack (no attack after it)
  total += duration;

  return total;
};
