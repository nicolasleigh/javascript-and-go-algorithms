const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  countChars(line);
});

function countChars(str: string) {
  let letters = 0;
  let spaces = 0;
  let digits = 0;
  let others = 0;

  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      letters++;
    } else if (ch === " ") {
      spaces++;
    } else if (/[0-9]/.test(ch)) {
      digits++;
    } else {
      others++;
    }
  }

  console.log(letters);
  console.log(spaces);
  console.log(digits);
  console.log(others);
}
