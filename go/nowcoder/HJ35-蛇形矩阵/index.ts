const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = parseInt(line.trim());
  printSnakeMatrix(n);
});

function printSnakeMatrix(n: number) {
  let arr = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      arr[i - j][j] = num++;
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
  }
}
