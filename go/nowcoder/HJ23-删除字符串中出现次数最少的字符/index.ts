const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const freqMap = {};

  // 1. 统计字符出现频率
  for (const ch of line) {
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }

  // 2. 找出最小出现次数
  const minCount = Math.min(...Object.values<number>(freqMap));

  // 3. 删除出现最少的字符
  let result = "";
  for (const ch of line) {
    if (freqMap[ch] !== minCount) {
      result += ch;
    }
  }

  console.log(result);
});
