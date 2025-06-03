const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
});

rl.on("close", () => {
  const [_, k] = inputs[0].split(" ").map(Number);
  const result = inputs[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .slice(0, k);

  console.log(result.join(" "));
});
