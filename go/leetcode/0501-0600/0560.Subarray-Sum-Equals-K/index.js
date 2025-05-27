/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1); // base case: one way to get sum 0
  let count = 0;
  let sum = 0;

  for (let num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (arr, k) {
  const n = arr.length;

  const prefix = new Array(n);
  prefix[0] = arr[0];

  // Build the prefix sum array
  for (let i = 1; i < n; i++) {
    prefix[i] = arr[i] + prefix[i - 1];
  }

  const map = new Map(); // To store prefix sum counts
  let res = 0;

  for (const sum of prefix) {
    if (sum === k) {
      res++;
    }

    if (map.has(sum - k)) {
      res += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return res;
};
