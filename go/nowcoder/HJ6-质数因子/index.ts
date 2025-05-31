const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  function primeFactors(num: number) {
    const factors = [];

    for (let i = 2; i <= Math.sqrt(num); i++) {
      while (num % i === 0) {
        factors.push(i);
        num = num / i;
      }
    }

    if (num > 1) factors.push(num);

    return factors.join(" ");
  }

  console.log(primeFactors(line));
});
