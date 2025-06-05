const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", () => {
  const [_, h] = input[0].split(" ").map(Number);
  const nums = input.slice(1).map((e) => e.split(" ").map(Number));

  for (const row of nums) {
    let [x, y, z] = row;
    // 将折射的光线以水面为对称 反转上去 刚好z的位置应该射到2*h-z
    let k = 2 * h - z;
    const n = gcd(gcd(x, y), k);

    console.log(`${x / n} ${y / n} ${k / n}`);
  }
});

// 欧几里得算法求最大公约数
function gcd(a: number, b: number) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
