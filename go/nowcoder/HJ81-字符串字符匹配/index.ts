const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", () => {
  console.log(check());
});

function check() {
  const s = input[0];
  const t = input[1];
  const freqMap = {};

  for (const item of t) {
    freqMap[item] = true;
  }

  for (const item of s) {
    if (!freqMap[item]) return false;
  }

  return true;
}
