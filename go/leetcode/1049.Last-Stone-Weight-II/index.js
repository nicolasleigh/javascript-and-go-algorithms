// 1049. Last Stone Weight II
// https://leetcode.com/problems/last-stone-weight-ii/description/

// We are interested in minimizing the difference in sums of these sets.
// The sets are not empty. In other words we can't have all items in one set.
// So this reduces to the problem of finding a set whose sum is as close to total/2 as possible.
// Because the sum of the complementary set will be (total - this_sum). Hence the "potential" answer will be (total - this_sum) - this_sum
// -- This value to be minimum we want total - 2 * this_sum ==> 0 (close to 0)
// --- This means total ==> 2 * this_sum
// --- Meaning this_sum ==> total / 2
// This is a knapsack problem where we want to find a set of items that sum to a maximum of total / 2, maximally so. We are only limited by the sum having to be <= total / 2.
// So how do we solve this problem? Find all subsets of the original set, find their sum, keep track of the sum that is <= total / 2. If we ever reach sum = total / 2, we are done. No need to keep going. If we reach sum > total / 2 discard those values.

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let n = stones.length;
  let sum = stones.reduce((acc, cur) => acc + cur, 0);
  let halfSum = Math.floor(sum / 2);

  let dp = Array(n + 1)
    .fill()
    .map(() => Array(halfSum + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= halfSum; j++) {
      if (stones[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - stones[i - 1]] + stones[i - 1]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // One group maximum sum is dp[n][halfSum], the other group maximum sum is sum-dp[n][halfSum],
  // so the difference of the two groups is (sum - dp[n][halfSum]) - dp[n][halfSum] = sum - 2 * dp[n][halfSum]
  return sum - 2 * dp[n][halfSum];
};

// Optimized version - One row
var lastStoneWeightII = function (stones) {
  let sum = stones.reduce((acc, cur) => acc + cur, 0);
  let halfSum = Math.floor(sum / 2);
  let dp = new Array(halfSum + 1).fill(0);

  for (let i = 1; i <= stones.length; i++) {
    for (let j = halfSum; j >= 0; j--) {
      if (stones[i - 1] <= j) {
        dp[j] = Math.max(dp[j], dp[j - stones[i - 1]] + stones[i - 1]);
      }
    }
  }

  return sum - 2 * dp[halfSum];
};
