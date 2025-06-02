const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  reverseWords(line);
});

function reverseWords(input: string) {
  // 1. 替换非字母字符为空格
  const cleanStr = input.replace(/[^a-zA-Z]/g, " ");
  // 2. 按空格切分 + 过滤空字符串 + 翻转
  const words = cleanStr.trim().split(/\s+/).reverse();
  // 3. 组合成结果
  console.log(words.join(" "));
}
