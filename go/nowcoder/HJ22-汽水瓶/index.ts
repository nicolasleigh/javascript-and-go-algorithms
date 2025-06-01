const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = parseInt(line);
  if (n === 0) {
    rl.close();
  } else {
    console.log(getMaxDrinks(n));
  }
});

function getMaxDrinks(n: number) {
  let count = 0;
  while (n >= 3) {
    let exchanged = Math.floor(n / 3);
    count += exchanged;
    n = exchanged + (n % 3);
  }

  // 如果剩下2个瓶子，可以借1个再换1瓶
  if (n === 2) count += 1;

  return count;
}
