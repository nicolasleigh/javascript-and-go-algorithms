const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
  if (input.length === 2) {
    const key = input[0];
    const text = input[1];
    console.log(encrypt(key, text));
  }
});

function encrypt(key: string, plainText: string) {
  const seen = new Set();
  const encryptMap = [];

  // 添加 key 中的去重字母
  for (let c of key) {
    if (seen.has(c)) continue;
    encryptMap.push(c);
    seen.add(c);
  }

  // 添加剩余未出现的 a~z 字母
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(97 + i); // 97 是 'a'
    if (seen.has(c)) continue;
    encryptMap.push(c);
    seen.add(c);
  }

  // // 构建映射 a~z → encryptMap[i]
  // const cipher = {};
  // for (let i = 0; i < 26; i++) {
  //   const original = String.fromCharCode(97 + i); // 'a' to 'z'
  //   cipher[original] = encryptMap[i];
  // }

  // 替换加密
  let result = "";
  for (let c of plainText) {
    const index = c.charCodeAt(0) - 97;
    // result += cipher[c];
    result += encryptMap[index];
  }

  return result;
}
