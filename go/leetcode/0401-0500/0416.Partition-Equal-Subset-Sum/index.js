// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);

  if (sum % 2 === 1) return false;

  let row = new Array(sum / 2 + 1).fill(false);

  row[0] = true;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = sum / 2; j >= 0; j--) {
      // start from right to left, because we are using one row to simulate two rows.
      // when iterate from right to left, the needed previous value of the ith item is stored in the left of it and has not been updated.
      if (nums[i - 1] <= j) {
        row[j] = row[j - nums[i - 1]] || row[j];
      }
    }
  }

  return row[sum / 2];
};
