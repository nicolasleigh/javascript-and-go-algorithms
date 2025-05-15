/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Main function
var searchRange = function (nums, target) {
  return [searchFirstEqualElement(nums, target), searchLastEqualElement(nums, target)];
};

// Binary search to find the first occurrence of the target
function searchFirstEqualElement(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid;
      }
      high = mid - 1;
    }
  }

  return -1;
}

// Binary search to find the last occurrence of the target
function searchLastEqualElement(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid;
      }
      low = mid + 1;
    }
  }

  return -1;
}
