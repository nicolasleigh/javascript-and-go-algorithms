const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const m = parseInt(line.trim());
  const start = m * m - m + 1; // 起始奇数

  const result = [];
  for (let i = 0; i < m; i++) {
    result.push(start + i * 2); // 生成 m 个连续奇数
  }

  console.log(result.join("+"));
});
