const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const nums = input[1].split(/\s+/).map(Number);

  let negativeCount = 0;
  let positiveCount = 0;
  let positiveSum = 0;

  for (let num of nums) {
    if (num < 0) {
      negativeCount++;
    } else if (num > 0) {
      positiveSum += num;
      positiveCount++;
    }
  }

  let avg = positiveCount > 0 ? positiveSum / positiveCount : 0;

  console.log(`${negativeCount} ${avg}`);
});
