const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", function (line) {
  inputs.push(line.trim());
});

rl.on("close", () => {
  const num = parseInt(inputs[0]);
  const command = inputs[1].split("");
  const list = Array.from({ length: num }, (_, i) => i + 1);
  const len = list.length;
  let left = 0;
  let right = num > 4 ? 3 : len - 1;
  let i = 0;

  for (const cmd of command) {
    if (cmd === "U") {
      i--;
    } else if (cmd === "D") {
      i++;
    }

    if (i < 0) {
      right = len - 1;
      left = num > 4 ? right - 4 + 1 : 0;
      i = len - 1;
    }
    if (i >= len) {
      left = 0;
      right = num > 4 ? 3 : len - 1;
      i = 0;
    }
    if (i < left) {
      left--;
      right--;
    }
    if (i > right) {
      left++;
      right++;
    }
  }

  console.log(list.slice(left, right + 1).join(" "));
  console.log(list[i]);
});
