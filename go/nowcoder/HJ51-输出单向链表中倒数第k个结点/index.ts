const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
});

rl.on("close", () => {
  for (let i = 0; i < inputs.length; i += 3) {
    const arg = inputs.slice(i, i + 3);
    KthNode(arg);
  }
});

function KthNode(arg) {
  const length = parseInt(arg[0]);
  const arr = arg[1].split(" ").map(Number);
  const k = arg[2];

  console.log(arr[length - k]);
}
