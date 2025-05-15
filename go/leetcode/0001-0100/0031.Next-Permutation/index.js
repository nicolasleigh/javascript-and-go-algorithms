/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function nextPermutation(nums) {
  let i = nums.length - 2;

  // Step 1: Find the first decreasing element from the right
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find the element just larger than nums[i] to its right
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  // Step 3: Reverse the elements to the right of i
  reverse(nums, i + 1, nums.length - 1);
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums, start, end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}
