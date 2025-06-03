const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const n = parseInt(line.trim());
  if (n <= 2) {
    console.log(-1);
  } else if (n % 2 === 1) {
    console.log(2);
  } else if (n % 4 === 0) {
    console.log(3);
  } else {
    console.log(4);
  }
});
