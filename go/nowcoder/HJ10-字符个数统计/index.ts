const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  function charCount(str: string) {
    const res = [];
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode < 127) {
        res[charCode] = 1;
      }
    }

    return res.reduce((acc, cur) => acc + cur, 0);
  }

  console.log(charCount(line));
});
