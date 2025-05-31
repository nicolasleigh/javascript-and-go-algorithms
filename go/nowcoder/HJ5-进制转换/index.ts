const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  function radixChange(hex: string) {
    return parseInt(hex, 16);
  }
  console.log(radixChange(line));
});
