const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [m, n] = line.trim().split(" ").map(Number);

  // dp[i][j] 表示从 (0,0) 走到 (i,j) 的路径数
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 初始化第一行和第一列
  for (let i = 0; i <= m; i++) dp[i][0] = 1;
  for (let j = 0; j <= n; j++) dp[0][j] = 1;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp[m][n]);
});
