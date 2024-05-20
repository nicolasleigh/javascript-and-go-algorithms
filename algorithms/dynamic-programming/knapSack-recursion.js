// Returns the value of maximum profit.
// The weight and value of the nth item are as follow: wt[n-1], val[n-1]
function knapSackRec(W, wt, val, n, dp) {
  if (n == 0 || W == 0) return 0;

  if (dp[n][W] != -1) return dp[n][W];

  // If weight of the nth item is more than Knapsack capacity W,
  // then this item cannot be included in the optimal solution
  if (wt[n - 1] > W)
    // Store the value of function call in table before return
    return (dp[n][W] = knapSackRec(W, wt, val, n - 1, dp));
  // Return the maximum of two cases:
  // (1) nth item included
  // (2) not included
  else
    return (dp[n][W] = Math.max(
      val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp),
      knapSackRec(W, wt, val, n - 1, dp)
    ));
}

function knapSack(W, wt, val, N) {
  // Declare the dp table dynamically
  // Initializing dp tables(row and cols) with -1 below
  let dp = new Array(N + 1).fill(-1).map(() => new Array(W + 1).fill(-1));
  return knapSackRec(W, wt, val, N, dp);
}

let profit = [60, 100, 120];
let weight = [10, 20, 30];

let W = 50;
let N = profit.length;

console.log(knapSack(W, weight, profit, N));

// Reference: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
