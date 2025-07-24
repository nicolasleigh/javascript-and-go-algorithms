// 27. Remove Element

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

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
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
