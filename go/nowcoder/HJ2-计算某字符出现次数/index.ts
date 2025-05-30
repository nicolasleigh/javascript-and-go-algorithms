const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arg: string[] = [];

rl.on("line", function (line) {
  arg.push(line);
}).on("close", () => {
  // Code
  function countChar(str: string, char: string) {
    const arr = str.trim().toLowerCase().split("");
    const count = {};
    for (const c of arr) {
      count[c] = (count[c] || 0) + 1;
    }
    // Avoid undefined output
    // Make sure the char is lowercase
    return count[char.toLowerCase()] ?? 0;
  }

  console.log(countChar(arg[0], arg[1]));
});
