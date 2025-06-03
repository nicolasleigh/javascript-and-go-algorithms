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
  let num1 = inputs[0] as string;
  let num2 = inputs[1] as string;
  let carry = 0;
  const result = [];

  // 确保num1长度最长
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }

  const n = num1.length;
  const m = num2.length;

  for (let i = 0; i < n; i++) {
    let a = parseInt(num1[n - 1 - i]);
    let b = m - 1 - i < 0 ? 0 : parseInt(num2[m - 1 - i]);
    result.push((a + b + carry) % 10);
    carry = Math.floor((a + b + carry) / 10);
  }

  // 别忘了最后一个carry
  if (carry !== 0) result.push(carry);

  console.log(result.reverse().join(""));
});
