/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[right]) {
      // Right half is sorted, so the min is in the left half including mid
      right = mid;
    } else {
      // Right half is unsorted, so the min is in the right half excluding mid
      left = mid + 1;
    }
  }

  return nums[left];
};
