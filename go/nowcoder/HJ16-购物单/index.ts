const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [totalAmount, count] = input[0].split(" ").map(Number);
  const items = Array(Number(count) + 1)
    .fill(0)
    .map(() => ({
      main: null,
      attachments: [],
    }));

  for (let i = 1; i <= count; i++) {
    let [v, p, q] = input[i].split(" ").map(Number);
    const value = v * p;

    if (q === 0) {
      // 主件
      items[i].main = { cost: v, value };
    } else {
      // 附件 -> 挂到对应主件
      if (!items[q].attachments) items[q].attachments = [];
      items[q].attachments.push({ cost: v, value });
    }
  }

  const dp = Array(totalAmount + 1).fill(0);

  for (let i = 1; i <= count; i++) {
    if (!items[i].main) continue;

    const { cost: v0, value: w0 } = items[i].main;
    const a = items[i].attachments;

    // 倒序更新背包
    for (let j = totalAmount; j >= 0; j--) {
      // 只买主件
      if (j >= v0) dp[j] = Math.max(dp[j], dp[j - v0] + w0);

      // 主件 + 附件1
      if (a.length >= 1 && j >= v0 + a[0].cost) dp[j] = Math.max(dp[j], dp[j - v0 - a[0].cost] + w0 + a[0].value);

      // 主件 + 附件2
      if (a.length === 2 && j >= v0 + a[1].cost) dp[j] = Math.max(dp[j], dp[j - v0 - a[1].cost] + w0 + a[1].value);

      // 主件 + 附件1 + 附件2
      if (a.length === 2 && j >= v0 + a[0].cost + a[1].cost)
        dp[j] = Math.max(dp[j], dp[j - v0 - a[0].cost - a[1].cost] + w0 + a[0].value + a[1].value);
    }
  }

  console.log(dp[totalAmount]);
});
