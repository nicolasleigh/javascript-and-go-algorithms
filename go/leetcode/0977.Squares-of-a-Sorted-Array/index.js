// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// two pointers
function sortedSquares(nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > nums[right]) {
      result.unshift(nums[left] ** 2);
      left++;
    } else {
      result.unshift(nums[right] ** 2);
      right--;
    }
  }

  return result;
}

// brute force
function sortedSquares2(nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
}
