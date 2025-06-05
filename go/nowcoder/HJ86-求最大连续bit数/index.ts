const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  let num = parseInt(line.trim());
  let count = 0;
  let max = 0;

  while (num > 0) {
    const one = num & 1;
    if (one) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }

    num = num >>> 1;
  }

  console.log(max);
});
