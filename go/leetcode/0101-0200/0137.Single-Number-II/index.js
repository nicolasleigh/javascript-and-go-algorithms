/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b); // Sort the array

  let index = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      index = i + 3;
      i = i + 2;
    } else {
      return nums[i]; // found the unique one
    }
  }

  return nums[index];
};

// Solution 2
var singleNumber = function (nums) {
  let x1 = 0;
  let x2 = 0;
  let mask = 0;

  for (let i of nums) {
    x2 ^= x1 & i;
    x1 ^= i;
    mask = ~(x1 & x2);
    x2 &= mask;
    x1 &= mask;
  }

  return x1; // x1 holds the unique number when every other appears 3 times
};
