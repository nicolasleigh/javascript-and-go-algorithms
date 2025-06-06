const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line: string) {
  // 使用正则将连续数字替换为 *数字*
  const result = line.replace(/\d+/g, (match) => `*${match}*`);
  console.log(result);
});
