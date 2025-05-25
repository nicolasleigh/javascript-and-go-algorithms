/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // calculate the sum of nums Array
  let sum = nums.reduce((acc, cur) => acc + cur, 0);

  // if the sum is odd, then we cannot partition the array into two equal halves
  if (sum % 2 === 1) return false;

  // sum/2 is similar to the capacity of the knapsack
  let dp = Array(nums.length + 1)
    .fill()
    .map(() => Array(sum / 2 + 1).fill(false));

  // with 0 elements, we can only create a sum of 0, so dp[0][0] is true
  dp[0][0] = true;

  // i starts from 1 because 0 element cannot fulfill the capacity requirements
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= sum / 2; j++) {
      // ith item is less than or equal to the capacity
      if (nums[i - 1] <= j) {
        // dp[i][j] means whether the specific sum j can be gotten from the first i numbers
        // dp[i-1][j] means the ith element is not included, and from the range [0, i-1] whether the sum j can be gotten
        // dp[i-1][j-nums[i-1]] means the ith element is included, and from the range [0, i-1] whether the sum j-nums[i-1] can be gotten. Note: ith element number is nums[i-1]
        dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // return the last element of the last row
  return dp[nums.length][sum / 2];
};
