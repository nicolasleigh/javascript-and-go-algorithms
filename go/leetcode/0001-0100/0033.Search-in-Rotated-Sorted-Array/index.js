/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 33. Search in Rotated Sorted Array
// Binary Search
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half is sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

// Key Points:
// - Uses binary search with adjustments to handle the rotation.
// - At each step, determine whether the left or right half is sorted.
// - Narrow the search space based on where the target may exist.
