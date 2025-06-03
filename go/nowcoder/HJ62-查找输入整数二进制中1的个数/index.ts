const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: number[] = [];

rl.on("line", function (line) {
  input.push(parseInt(line.trim()));

  if (input.length === 2) {
    console.log(countOnes(input[0]));
    console.log(countOnes(input[1]));
  }
});

function countOnes(num: number) {
  let count = 0;

  while (num > 0) {
    count += num & 1;
    num = num >>> 1;
  }
  return count;
}
