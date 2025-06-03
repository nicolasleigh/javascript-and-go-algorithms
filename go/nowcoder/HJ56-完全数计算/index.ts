const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = parseInt(line.trim());
  console.log(countPerfectNumbers(input));
});

function countPerfectNumbers(n: number) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isPerfectNumber(i)) count++;
  }
  return count;
}

function isPerfectNumber(num: number) {
  if (num <= 1) return false;

  let sum = 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
