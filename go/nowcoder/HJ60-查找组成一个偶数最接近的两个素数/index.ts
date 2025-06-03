const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = parseInt(line.trim());
  console.log(find(input).join("\n"));
});

function find(n: number) {
  const mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    let a = mid - i;
    let b = mid + i;

    if (isPrime(a) && isPrime(b)) {
      return [a, b];
    }
  }
}

function isPrime(num: number) {
  if (num <= 3) return true;

  const n = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= n; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
