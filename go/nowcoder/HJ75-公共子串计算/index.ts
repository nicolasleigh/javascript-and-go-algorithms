const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
});

rl.on("close", () => {
  const s = inputs[0];
  const t = inputs[1];
  let maxLen = 0;
  // dp[i][j]: 以 s1[i - 1] 和 s2[j - 1] 结尾的最长公共子串的长度。
  const dp = Array.from({ length: s.length + 1 }, () => Array(t.length + 1).fill(0));

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  console.log(maxLen);
});
