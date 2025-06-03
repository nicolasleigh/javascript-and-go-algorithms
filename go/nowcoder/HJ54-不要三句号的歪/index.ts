const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = line.trim() as string;
  const arr = input.split(",");
  const i = arr.indexOf("...");
  console.log(parseInt(arr[i + 1]) - parseInt(arr[i - 1]) - 1);
});
