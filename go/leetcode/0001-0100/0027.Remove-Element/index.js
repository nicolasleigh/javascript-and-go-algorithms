// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

function removeElement(nums, val) {
  let slowIndex = 0;
  let fastIndex = 0;
  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex++] = nums[fastIndex];
    }
    fastIndex++;
  }
  return slowIndex;
}
