const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
});

rl.on("close", () => {
  const s = inputs[0];
  const n = parseInt(inputs[1]);

  let maxGC = 0;
  let maxSubstr = "";

  let currentGC = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "G" || s[i] === "C") {
      currentGC++;
    }
  }
  maxGC = currentGC;
  maxSubstr = s.substring(0, n);

  for (let i = 1; i <= s.length - n; i++) {
    if (s[i - 1] === "G" || s[i - 1] === "C") currentGC--;
    if (s[i + n - 1] === "G" || s[i + n - 1] === "C") currentGC++;

    if (currentGC > maxGC) {
      maxGC = currentGC;
      maxSubstr = s.substring(i, i + n);
    }
  }

  console.log(maxSubstr);
});
