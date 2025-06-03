const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(...line.trim().split(" ").map(Number));
  console.log(countWays(input[0], input[1]));
});

// 定义 f(m, n) 表示把 m 个苹果放进 n 个盘子的放法总数。

// f(m, n) =
//   f(m, n-1)       // 1. 至少一个盘子为空（即减少一个盘子）
// + f(m - n, n)     // 2. 每个盘子至少放一个苹果（即每个盘子先放1个苹果，再分配剩下的 m - n 个）

// 边界条件：
// f(0, n) = 1：0 个苹果无论多少盘子，只有 1 种放法（都空着）
// f(m, 0) = 0：有苹果但没有盘子，无法放置
// f(m, n) = f(m, m)：如果盘子数大于苹果数，就相当于只用前 m 个盘子，多的无意义

function countWays(m: number, n: number) {
  if (m === 0) return 1;
  if (n === 0) return 0;
  if (n > m) return countWays(m, m);
  return countWays(m, n - 1) + countWays(m - n, n);
}

function countWays2(m: number, n: number, memo = {}) {
  const key = `${m},${n}`;
  if (memo[key] !== undefined) return memo[key];

  let res;
  if (m === 0) res = 1;
  else if (n === 0) res = 0;
  else if (n > m) res = countWays2(m, m, memo);
  else res = countWays2(m, n - 1, memo) + countWays2(m - n, n, memo);

  memo[key] = res;
  return res;
}

function countWays3(m: number, n: number) {
  // 创建二维数组 dp[m+1][n+1]: 把 i 个苹果放进 j 个盘子中的放法数。
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 初始化：0 个苹果时无论多少盘子都是 1 种放法
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 1;
  }

  // 填表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (j > i) {
        dp[i][j] = dp[i][i];
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - j][j];
      }
    }
  }

  return dp[m][n];
}
