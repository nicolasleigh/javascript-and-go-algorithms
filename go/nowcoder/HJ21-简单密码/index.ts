const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(transform(line));
});

function transform(str: string) {
  const map = {
    abc: "2",
    def: "3",
    ghi: "4",
    jkl: "5",
    mno: "6",
    pqrs: "7",
    tuv: "8",
    wxyz: "9",
  };

  let result = "";

  for (let char of str) {
    if (/[A-Z]/.test(char)) {
      // 大写字母 → 小写 → 向后移动一位
      let lower = char.toLowerCase();
      let next = "";
      if (lower === "z") {
        next = "a";
      } else {
        next = String.fromCharCode(lower.charCodeAt(0) + 1);
      }
      // let next = String.fromCharCode(((lower.charCodeAt(0) - 97 + 1) % 26) + 97);
      result += next;
    } else if (/[a-z]/.test(char)) {
      // 小写字母 → 映射为数字
      for (let key in map) {
        if (key.includes(char)) {
          result += map[key];
          break;
        }
      }
    } else {
      // 数字或其他符号，原样输出
      result += char;
    }
  }

  return result;
}
