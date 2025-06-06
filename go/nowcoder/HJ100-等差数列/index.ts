const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = parseInt(line.trim());
  let sum = 0;
  let term = 2;

  for (let i = 0; i < n; i++) {
    sum += term;
    term += 3;
  }
  console.log(sum);
});
