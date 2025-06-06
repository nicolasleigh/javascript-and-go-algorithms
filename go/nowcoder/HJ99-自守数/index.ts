const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = parseInt(line);
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const square = i * i;
    const strI = i.toString();
    const strSquare = square.toString();

    if (strSquare.endsWith(strI)) {
      count++;
    }
  }

  console.log(count);
});
