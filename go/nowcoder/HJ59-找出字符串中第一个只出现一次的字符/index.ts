const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = line.trim();
  console.log(find(input));
});

function find(str) {
  const freqMap = new Map();

  for (const ch of str) {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  }

  for (const [ch, count] of freqMap) {
    if (count === 1) {
      return ch;
    }
  }

  return -1;
}
