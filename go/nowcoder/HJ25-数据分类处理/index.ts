const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    processData(input[0], input[1]);
  }
});

function processData(strI: string, strR: string) {
  const I = strI.split(" ").slice(1).map(Number); // 去掉首个元素
  const rawR = Array.from(new Set(strR.split(" ").slice(1).map(Number))); // 去重
  const R = rawR.sort((a, b) => a - b); // 升序

  let output = [];
  let total = 0;

  for (const r of R) {
    const matches = [];

    for (let i = 0; i < I.length; i++) {
      if (I[i].toString().includes(r.toString())) {
        matches.push(i, I[i]);
      }
    }

    if (matches.length > 0) {
      output.push(r, matches.length / 2, ...matches);
      // total += 2 + matches.length; // r + count + (index,value)...
    }
  }

  total = output.length;

  console.log(`${total} ${output.join(" ")}`);
}
