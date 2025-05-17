/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// Similar to 0033
var search = function (nums, target) {
  nums = removeDuplicate(nums); // Remove duplicates

  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);

    if (nums[mid] === target) {
      return true;
    }

    // Left side is sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right side is sorted
    else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
};

// Helper function to remove duplicates
function removeDuplicate(nums) {
  const seen = new Set();
  const result = [];

  for (let num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  return result;
}

// Solution 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return true;
    }

    // If duplicates on both ends, shrink the window
    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low++;
      high--;
    }
    // Left half is sorted
    else if (nums[low] <= nums[mid]) {
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

  return false;
};
