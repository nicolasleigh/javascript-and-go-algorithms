var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] >= target) {
        return mid + 1;
      }
      low = mid + 1;
    }
  }

  return 0;
};

var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};
