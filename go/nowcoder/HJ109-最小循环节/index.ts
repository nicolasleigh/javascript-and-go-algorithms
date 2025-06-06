const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const str = line.trim() as string;
  const set = new Set(str);
  console.log(set.size);
});
