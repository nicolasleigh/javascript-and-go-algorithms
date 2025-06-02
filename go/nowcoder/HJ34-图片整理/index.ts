const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(sortCharacters(line));
});

function sortCharacters(str: string) {
  const chars = str.split("");
  chars.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return chars.join("");
}
