const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  function countOne(str: string) {
    let num = parseInt(str, 10);
    let count = 0;

    while (num > 0) {
      count += num & 1;
      num = num >>> 1;
    }

    return count;
  }

  console.log(countOne(line));
});
