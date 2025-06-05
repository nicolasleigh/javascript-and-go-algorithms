const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on("line", function (line: string) {
  input.push(line.trim());
});

rl.on("close", () => {
  const num1 = input[1].split(" ").map(Number);
  const num2 = input[3].split(" ").map(Number);
  const set = new Set(num1.concat(num2));
  const res = Array.from(set).sort((a, b) => a - b);

  console.log(res.join(""));
});
