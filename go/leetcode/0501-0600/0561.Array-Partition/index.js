/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b); // sort ascending
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]; // take the smaller in each pair
  }
  return sum;
};
