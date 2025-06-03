const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = line.trim() as string;
  const res = input.replace(/\{|\[/g, "(").replace(/\}|\]/g, ")");
  console.log(eval(res));
});
