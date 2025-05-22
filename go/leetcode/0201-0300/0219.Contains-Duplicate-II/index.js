/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

function containsNearbyDuplicate(nums, k) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numMap.has(num)) {
      const prevIndex = numMap.get(num);
      if (i - prevIndex <= k) {
        return true;
      }
    }
    numMap.set(num, i);
  }

  return false;
}
