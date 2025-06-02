const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const n = parseInt(input[0]);
  for (let i = 1; i <= n; i++) {
    console.log(getBeauty(input[i]));
  }
});

function getBeauty(name) {
  name = name.toLowerCase();
  const count = {};

  for (let ch of name) {
    if (/[a-z]/.test(ch)) {
      count[ch] = (count[ch] || 0) + 1;
    }
  }

  const freqs = Object.values<number>(count).sort((a, b) => b - a);
  let beauty = 0;
  let weight = 26;

  for (let freq of freqs) {
    beauty += freq * weight;
    weight--;
  }

  return beauty;
}
