const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
  if (inputs.length === 3) {
    const n = parseInt(inputs[0]);
    const weights = inputs[1].split(" ").map(Number);
    const counts = inputs[2].split(" ").map(Number);
    console.log(getDistinctWeights(n, weights, counts));
  }
});

function getDistinctWeights(n: number, weights: number[], counts: number[]) {
  let possible = new Set<number>();
  possible.add(0); // 初始只有 0 重量

  for (let i = 0; i < n; i++) {
    const w = weights[i];
    const c = counts[i];
    const current = Array.from(possible); // 当前已有的重量列表

    for (let j = 1; j <= c; j++) {
      for (let exist of current) {
        possible.add(exist + w * j);
      }
    }
  }

  return possible.size;
}
