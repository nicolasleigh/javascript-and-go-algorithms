/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    // `j < i` also correct, but because n and k are greater than or equal 2, it's better to use `j < i - 1`
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  return dp[n];
};

// F(2) = 1
// F(3) = 1*2 = 2
// F(4) = 2*2 = 4
// F(5) = 2*3 = 6
// F(6) = 3*3 = 9
// F(7) = 2*2*3 = 12 = F(4) * 3
// F(8) = 2*3*3 = 18 = F(5) * 3
// F(9) = 3*3*3 = 27 = F(6) * 3
// F(10) = 2*2*3*3 = 36 = F(7) * 3
// ...

// 2 and 3 are the only two factors used.
// 4 is not used since we can use `2*2` instead.
// 5 is not used since if we split `5` into `2, 3` we can get larger result.
// And so on.
// Since number `5`, we can always factor out `3` first.
// So we can compute from `F(5)` to `F(n)` using `F(i) = 3 * max(i - 3, F(i - 3))`.

function integerBreak(n) {
  const dp = new Array(Math.max(n + 1, 5));
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 4;
  for (let i = 5; i <= n; i++) {
    dp[i] = 3 * Math.max(i - 3, dp[i - 3]);
  }
  return dp[n];
}
