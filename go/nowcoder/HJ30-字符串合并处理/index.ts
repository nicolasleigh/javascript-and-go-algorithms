const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [str1, str2] = line.trim().split(" ");
  const merged = str1 + str2;

  let even = [];
  let odd = [];

  for (let i = 0; i < merged.length; i++) {
    if (i % 2 === 0) {
      even.push(merged[i]);
    } else {
      odd.push(merged[i]);
    }
  }

  even.sort();
  odd.sort();

  let sorted = [];
  let evenIndex = 0;
  let oddIndex = 0;

  for (let i = 0; i < merged.length; i++) {
    if (i % 2 === 0) {
      sorted.push(even[evenIndex++]);
    } else {
      sorted.push(odd[oddIndex++]);
    }
  }

  const result = sorted.map(transformChar).join("");
  console.log(result);
});

function transformChar(ch: string) {
  if (/^[0-9a-fA-F]$/.test(ch)) {
    let bin = parseInt(ch, 16).toString(2).padStart(4, "0");
    let reversedBin = bin.split("").reverse().join("");
    let hex = parseInt(reversedBin, 2).toString(16).toUpperCase();
    return hex;
  }
  return ch;
}
