/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  while (k > 0) {
    nums[0] = -nums[0];
    k--;
  }

  let res = nums.reduce((acc, cur) => acc + cur, 0);
  return res;
};

var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b); // Step 1: sort ascending

  // Step 2: Flip negative numbers greedily
  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  // Step 3: If k is still odd, flip the smallest absolute value once
  nums.sort((a, b) => a - b); // sort again to find smallest number
  if (k % 2 === 1) {
    nums[0] = -nums[0];
  }

  // Step 4: Return the sum
  return nums.reduce((sum, num) => sum + num, 0);
};
