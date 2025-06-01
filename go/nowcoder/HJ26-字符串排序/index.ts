const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(sortLetters(line));
});

function sortLetters(str) {
  const letters = [];

  // 1. 收集所有字母
  for (const ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      letters.push(ch);
    }
  }

  // 2. 按不区分大小写排序
  letters.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    return lowerA.localeCompare(lowerB);
  });

  // 3. 再次遍历字符串，替换字母字符
  let result = "";
  let letterIndex = 0;

  for (const ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      result += letters[letterIndex++];
    } else {
      result += ch; // 保留非字母
    }
  }

  return result;
}
