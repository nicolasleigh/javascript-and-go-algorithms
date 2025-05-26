/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const modMap = new Map();
  modMap.set(0, -1); // Handle case where prefix itself is divisible by k

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    mod = sum % k;

    if (modMap.has(mod)) {
      if (i - modMap.get(mod) > 1) {
        return true;
      }
    } else {
      modMap.set(mod, i);
    }
  }
  return false;
};
