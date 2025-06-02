const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = parseInt(line.trim());
  console.log(bounceHeight(input));
});

function bounceHeight(num: number) {
  const originalHeight = num;
  let count = 0;
  const result = [];

  for (let i = 0; i < 5; i++) {
    num /= 2;
    count += num;
  }

  const total = originalHeight + 2 * (count - num);
  result.push(total, num);

  return result.join("\n");
}
