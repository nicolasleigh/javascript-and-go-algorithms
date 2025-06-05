const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line: string) {
  const matches = line.match(/\d+/g); // 匹配所有数字串

  let maxLen = 0;
  for (let num of matches) {
    if (num.length > maxLen) {
      maxLen = num.length;
    }
  }

  const result = matches.filter((num) => num.length === maxLen).join("");
  console.log(`${result},${maxLen}`);
});
