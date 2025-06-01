const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (checkPassword(line)) {
    console.log("OK");
  } else {
    console.log("NG");
  }
});

function checkPassword(str: string) {
  // 1. 长度大于8
  if (str.length <= 8) return false;

  // 2. 至少包含三种字符类型
  let types = 0;
  if (/[A-Z]/.test(str)) types++;
  if (/[a-z]/.test(str)) types++;
  if (/[0-9]/.test(str)) types++;
  if (/[^a-zA-Z0-9]/.test(str)) types++;
  if (types < 3) return false;

  // 3. 不能有长度大于2的重复子串
  for (let i = 0; i < str.length - 2; i++) {
    const sub = str.slice(i, i + 3);
    if (str.indexOf(sub, i + 3) !== -1) return false;
  }

  return true;
}
