/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);

  if (sum % 2 === 1) return false;

  let previousRow = new Array(sum / 2 + 1).fill(false);
  let currentRow = new Array(sum / 2 + 1).fill(false);

  previousRow[0] = true;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= sum / 2; j++) {
      if (nums[i - 1] <= j) {
        currentRow[j] = previousRow[j - nums[i - 1]] || previousRow[j];
      } else {
        currentRow[j] = previousRow[j];
      }
    }
    previousRow = currentRow.slice();
    // previousRow = [...currentRow];
  }

  return currentRow[sum / 2];
};
