const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const arr = line.trim().split(" ");
  const n = parseInt(arr[0]);
  const words = arr.slice(1, 1 + n);
  const x = arr[n + 1];
  const k = parseInt(arr[n + 2]);

  const result = findBrotherWords(words, x);

  console.log(result.length);
  if (k <= result.length) {
    console.log(result.sort()[k - 1]);
  }
});

function isBrother(a: string, b: string) {
  if (a === b || a.length !== b.length) return false;
  return a.split("").sort().join("") === b.split("").sort().join("");
}

function findBrotherWords(words: string[], target: string) {
  return words.filter((word) => isBrother(word, target));
}
