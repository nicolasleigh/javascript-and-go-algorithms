const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  function splitCharacter(str: string) {
    const arr = str.split("");
    const res: string[] = [];

    for (let i = 0; i < arr.length; i += 8) {
      res.push(
        arr
          .slice(i, i + 8)
          .join("")
          .padEnd(8, "0")
      );
    }

    return res;
  }

  splitCharacter(line).forEach((item) => console.log(item));
});
