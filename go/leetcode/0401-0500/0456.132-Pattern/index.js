/**
 * @param {number[]} nums
 * @return {boolean}
 */

var find132pattern = function (nums) {
  const n = nums.length;
  if (n < 3) return false;

  let stack = [];
  let third = -Infinity; // This is nums[k] (the '2' in 132)

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < third) {
      return true; // Found nums[i] < nums[k] < nums[j]
    }

    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      // Update third to the last popped value (possible nums[k])
      third = stack.pop();
    }

    // nums[i] could be a future nums[j], push it to the stack
    stack.push(nums[i]);
  }

  return false;
};
