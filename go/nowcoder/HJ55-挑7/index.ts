const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const n = parseInt(line.trim());

  console.log(selectSeven(n));
});

function selectSeven(n: number) {
  if (n < 7) return 0;

  let count = 0;

  for (let i = 7; i <= n; i++) {
    if (i % 7 === 0) {
      count++;
    } else {
      const str = i.toString();
      if (str.includes("7")) {
        count++;
      }
    }
  }

  return count;
}
