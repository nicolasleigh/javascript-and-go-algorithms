const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line.trim();

  let [a, b] = input.split("/").map(Number);
  const result = [];

  while (a !== 0) {
    // 找到最小的 n，使得 1/n <= a/b，即 n >= b / a
    let n = Math.ceil(b / a);
    result.push(`1/${n}`);

    // 更新 a/b = a/b - 1/n = (a*n - b) / (b*n)
    a = a * n - b;
    b = b * n;
  }

  console.log(result.join("+"));
});
