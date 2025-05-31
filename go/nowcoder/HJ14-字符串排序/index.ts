const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arg = [];

rl.on("line", function (line) {
  arg.push(line);
}).on("close", () => {
  function stringSort() {
    arg.splice(0, 1);
    arg.sort();

    return arg;
  }

  console.log(stringSort().join("\n"));
});
