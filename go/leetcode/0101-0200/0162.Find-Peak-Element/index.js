/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length;

  if (n === 1) return 0;

  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid] < nums[mid - 1]) {
      // Peak must be on the left
      high = mid - 1;
    } else {
      // Peak must be on the right
      low = mid + 1;
    }
  }

  return -1; // Should never reach here if input constraints are respected
};
