/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums) {
  let insertPos = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i];
    }
  }

  // Fill the rest with zeros
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
}

// Solution 2
function moveZeroes(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // Swap nums[left] and nums[right]
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}
