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

function removeElement(nums, val) {
  // Index where we place the next non-val element
  let insertPos = 0;

  // Loop through all elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not the one we want to remove
    if (nums[i] !== val) {
      // Place it at the current insert position
      nums[insertPos] = nums[i];
      insertPos++; // Move the insert position forward
    }
  }

  // The first `insertPos` elements are now the result
  return insertPos;
}
