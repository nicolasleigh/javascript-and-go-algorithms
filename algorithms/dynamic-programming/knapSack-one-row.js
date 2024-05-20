function knapSack(W, wt, val, n) {
  // Making and initializing dp array
  var dp = Array(W + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    // right to left
    for (let w = W; w >= 0; w--) {
      if (wt[i - 1] <= w)
        // Finding the maximum value
        dp[w] = Math.max(dp[w], dp[w - wt[i - 1]] + val[i - 1]);
    }
  }

  // Returning the maximum value of knapsack
  return dp[W];
}

// Driver code
var profit = [15, 20, 30];
var weight = [1, 3, 4];
var W = 4;
var n = profit.length;
console.log(knapSack(W, weight, profit, n));

// Reference: https://stackoverflow.com/questions/17246670/0-1-knapsack-dynamic-programming-optimization-from-2d-matrix-to-1d-matrix
