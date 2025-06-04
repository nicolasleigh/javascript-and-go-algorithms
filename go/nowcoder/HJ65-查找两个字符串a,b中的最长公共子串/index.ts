const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", () => {
  console.log(findLongestCommonSubstring(input[0], input[1]));
});

function findLongestCommonSubstring(a: string, b: string) {
  // 确保 a 是较短的字符串
  if (a.length > b.length) [a, b] = [b, a];

  const m = a.length,
    n = b.length;
  // 使用二维数组 dp[i][j] 表示以 a[i-1] 和 b[j-1] 结尾的最长公共子串长度
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  let maxLen = 0;
  let endPos = 0; // 记录最长公共子串在 a 中的结束位置

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
          endPos = i; // 更新结束位置
        }
      }
    }
  }

  return a.substring(endPos - maxLen, endPos);
}
