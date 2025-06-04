const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", (line) => {
  inputs.push(line.trim());
});

rl.on("close", () => {
  const m = parseInt(inputs[0]);
  const n = parseInt(inputs[2]);
  const k = parseInt(inputs[1]);

  const A = inputs.slice(3, 3 + m).map((row) => row.split(" ").map(Number));
  const B = inputs.slice(3 + m).map((row) => row.split(" ").map(Number));

  const result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let p = 0; p < k; p++) {
        result[i][j] += A[i][p] * B[p][j];
      }
    }
  }

  result.forEach((row) => console.log(row.join(" ")));
});
