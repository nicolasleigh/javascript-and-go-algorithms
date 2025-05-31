const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  function reverse(str: string) {
    return str.split(" ").reverse().join(" ");
  }

  console.log(reverse(line));
});
