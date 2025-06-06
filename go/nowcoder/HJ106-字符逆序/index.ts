const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line: string) {
  const arr = line.trim().split(" ").reverse();
  const res = [];

  for (const item of arr) {
    const str = item.split("").reverse().join("");
    res.push(str);
  }

  console.log(res.join(" "));
});
