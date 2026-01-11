/**
 * @param {number[]} nums
 * @return {number}
 */
// 80. Remove Duplicates from Sorted Array II
var removeDuplicates = function (nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    // ensures each number appears at most twice
    if (slow < 2 || nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
};
