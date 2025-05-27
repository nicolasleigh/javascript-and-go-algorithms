/**
 * @param {number[]} candyType
 * @return {number}
 */
// new Set(candyType) gives us all unique types of candies.
// The sister can eat n / 2 candies.
// So the answer is the minimum of:
// the number of unique candy types
// and n / 2 (how many candies she is allowed to eat)
var distributeCandies = function (candyType) {
  const uniqueTypes = new Set(candyType); // count unique types
  const maxCandies = candyType.length / 2; // max number sister can eat
  return Math.min(uniqueTypes.size, maxCandies); // she can eat at most half, and not more than unique types
};
