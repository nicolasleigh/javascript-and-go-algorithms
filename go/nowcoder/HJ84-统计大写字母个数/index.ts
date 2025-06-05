const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const str = line.trim() as string;
  let count = 0;

  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) {
      count++;
    }
  }

  console.log(count);
});
