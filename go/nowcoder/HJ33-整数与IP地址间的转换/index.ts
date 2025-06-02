const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    const ipStr = input[0];
    const intStr = input[1];

    console.log(ipToInt(ipStr));
    console.log(intToIp(intStr));
  }
});

// IP地址转整数
function ipToInt(ip: string) {
  const parts = ip.split(".").map(Number);
  let binary = "";
  // let result = 0;
  for (let i = 0; i < 4; i++) {
    // result = result * 256 + parts[i];
    binary += parts[i].toString(2).padStart(8, "0");
  }
  return parseInt(binary, 2);
  // return result;
}

// 整数转IP地址
function intToIp(numStr: string) {
  let num = parseInt(numStr);
  const parts = [];
  // for (let i = 3; i >= 0; i--) {
  //   parts[i] = num % 256;
  //   num = Math.floor(num / 256);
  // }

  const binary = num.toString(2).padStart(32, "0");
  for (let i = 0; i < 32; i += 8) {
    const part = binary.slice(i, i + 8);
    parts.push(parseInt(part, 2));
  }
  return parts.join(".");
}
