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
  const n = parseInt(inputs[0]);

  const dims = inputs.slice(1, n + 1).map((line) => line.split(" ").map(Number));
  const expr = inputs[n + 1];

  const stack = [];
  const matrixMap = {};

  // 把矩阵名称 A, B, C... 映射到 dims 下标
  for (let i = 0; i < dims.length; i++) {
    matrixMap[String.fromCharCode(65 + i)] = dims[i]; // 'A' + i
  }

  let totalCost = 0;

  for (let ch of expr) {
    if (ch === "(") {
      continue;
    } else if (ch >= "A" && ch <= "Z") {
      stack.push(matrixMap[ch]);
    } else if (ch === ")") {
      const matrix2 = stack.pop();
      const matrix1 = stack.pop();
      const [m1, n1] = matrix1;
      const [_, n2] = matrix2;

      totalCost += m1 * n1 * n2;
      stack.push([m1, n2]); // 结果矩阵维度
    }
  }

  console.log(totalCost);
});
