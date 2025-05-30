const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arg: number[] = [];

rl.on("line", function (line) {
  arg.push(line);
}).on("close", () => {
  // Code
  function randomNumber(array: number[]) {
    const set = new Set(array.slice(1));
    const res = Array.from(set).sort((a, b) => a - b);
    res.forEach((item) => console.log(item));
  }

  randomNumber(arg);
});
