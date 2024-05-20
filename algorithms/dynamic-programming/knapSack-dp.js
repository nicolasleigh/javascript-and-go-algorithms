// A Dynamic Programming based solution for 0-1 Knapsack problem.
// Returns the maximum value that can be put in a knapsack of capacity W
function knapSack(W, wt, val, n) {
  let K = new Array(n + 1);

  // Build table K[][] in bottom up manner
  for (let i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (let w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      // if the weight of the ith item is less than or equal to the capacity
      else if (wt[i - 1] <= w)
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      // if greater than the capacity
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
}

let profit = [60, 100, 120];
let weight = [10, 20, 30];
let W = 50;
let n = profit.length;
console.log(knapSack(W, weight, profit, n));

// Reference: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
