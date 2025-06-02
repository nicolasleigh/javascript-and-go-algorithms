const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = parseInt(line.trim());
  console.log(countRabbits(n));
});

function countRabbits(n) {
  if (n === 1 || n === 2) return 1;

  let prev = 1; // 第 1 个月
  let curr = 1; // 第 2 个月
  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

// 相同：LeetCode 0509.Fibonacci-Number
function countRabbits2(n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
