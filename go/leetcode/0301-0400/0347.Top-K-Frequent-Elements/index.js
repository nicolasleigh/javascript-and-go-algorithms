/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let counter = new Map();
  nums.forEach((num) => {
    counter.set(num, (counter.get(num) || 0) + 1);
  });
  let sorted = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((entry) => entry[0]);
};
