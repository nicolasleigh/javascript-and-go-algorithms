/**
 * @param {number[]} nums
 * @return {number}
 */
// Prefix Sum
// We can transform this problem into a prefix sum problem using a clever trick:
//    Convert each 0 into -1
//    Then the problem reduces to finding the longest subarray with a sum of 0

// Step-by-step:
//    Replace 0 with -1, so the goal becomes finding a subarray where the sum is zero.
//    Use a map to store the first index where each prefix sum occurred.
//    If the same sum occurs again later, the subarray between those two indices has sum zero.
//    Update maxLength whenever this happens.
var findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1); // base case: sum 0 at index -1
  let maxLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Treat 0 as -1
    sum += nums[i] === 0 ? -1 : 1;

    if (map.has(sum)) {
      maxLength = Math.max(maxLength, i - map.get(sum));
    } else {
      map.set(sum, i); // store first occurrence
    }
  }

  return maxLength;
};
