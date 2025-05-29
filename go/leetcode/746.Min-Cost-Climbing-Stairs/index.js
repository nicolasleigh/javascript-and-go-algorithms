/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};

var minCostClimbingStairs = function (cost) {
  const n = cost.length;

  // prev = dp[i-2], curr = dp[i-1]
  let prev = 0;
  let curr = 0;

  for (let i = 2; i <= n; i++) {
    // To reach step i, choose the cheaper of:
    // - one step from (i-1) + cost[i-1]
    // - two steps from (i-2) + cost[i-2]
    const next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
    prev = curr;
    curr = next;
  }

  return curr;
};
