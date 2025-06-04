const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const EPSILON = 1e-6;

rl.on("line", (line) => {
  const input = line.trim().split(" ").map(Number);

  if (dfs(input)) {
    console.log("true");
  } else {
    console.log("false");
  }
});

function dfs(nums: number[]) {
  if (nums.length === 1) {
    return Math.abs(nums[0] - 24) < EPSILON;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      const next = [];
      for (let k = 0; k < nums.length; k++) {
        if (k !== i && k !== j) next.push(nums[k]);
      }

      const a = nums[i];
      const b = nums[j];

      const ops = [a + b, a - b, b - a, a * b, a / b, b / a];

      for (const val of ops) {
        if (dfs([...next, val])) return true;
      }
    }
  }
  return false;
}
