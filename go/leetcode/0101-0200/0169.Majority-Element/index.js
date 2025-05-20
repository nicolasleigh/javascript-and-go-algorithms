/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const countMap = new Map();
  const majority = Math.floor(nums.length / 2);

  for (const num of nums) {
    const count = (countMap.get(num) || 0) + 1;
    countMap.set(num, count);
    if (count > majority) {
      return num;
    }
  }

  return 0; // This line should never be reached if the input guarantees a majority element
};
