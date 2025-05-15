/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) space
var firstMissingPositive = function (nums) {
  const numMap = new Map();

  for (const num of nums) {
    numMap.set(num, true);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!numMap.has(i)) {
      return i;
    }
  }

  return nums.length + 1;
};

// O(1) space
var firstMissingPositive = function (nums) {
  const n = nums.length;

  // Place each number in its correct index (i.e., nums[i] = i + 1)
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Find the first index i where nums[i] != i + 1
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // All numbers are in the correct place
  return n + 1;
};
