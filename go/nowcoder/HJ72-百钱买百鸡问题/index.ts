const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const x = 20; // 公鸡最多买20只
  const y = 33; // 母鸡最多买33只
  const result = [];

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      let z = 3 * (100 - 5 * i - 3 * j);

      // 如果小鸡数大于等于0 且 公鸡、母鸡和小鸡数量加起来等于100
      if (z >= 0 && i + j + z === 100) {
        result.push(`${i} ${j} ${z}`);
      }
    }
  }

  result.forEach((e) => console.log(e));
});
