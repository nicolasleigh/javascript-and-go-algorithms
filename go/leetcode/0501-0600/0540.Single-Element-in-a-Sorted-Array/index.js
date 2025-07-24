/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let res = 0;
  for (const num of nums) {
    res = res ^ num;
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Ensure mid is even
    if (mid % 2 === 1) mid--;

    if (nums[mid] === nums[mid + 1]) {
      // Unique element is in the right half
      left = mid + 2;
    } else {
      // Unique element is in the left half (could be mid)
      right = mid;
    }
  }

  return nums[left];
};
