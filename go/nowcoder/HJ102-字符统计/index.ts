const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const freqMap = {};

  for (let ch of line.trim()) {
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }

  const arr = Object.keys(freqMap);
  arr.sort((a, b) => {
    if (freqMap[a] === freqMap[b]) return a.charCodeAt(0) - b.charCodeAt(0);
    return freqMap[b] - freqMap[a];
  });

  console.log(arr.join(""));
});
