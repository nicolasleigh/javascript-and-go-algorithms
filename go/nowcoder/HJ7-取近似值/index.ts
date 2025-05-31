const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  function ans(num: number) {
    console.log(Math.round(num));
  }

  ans(line);
});
