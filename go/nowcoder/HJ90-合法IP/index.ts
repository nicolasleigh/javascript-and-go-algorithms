const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const isValidIP = (ip: string) => {
    const parts = ip.split(".");
    if (parts.length !== 4) return false;

    for (let part of parts) {
      // 空串
      if (part.length === 0) return false;

      // 非数字
      if (!/^\d+$/.test(part)) return false;

      const num = Number(part);
      // 数值范围
      if (num < 0 || num > 255) return false;

      // 前导零不合法（排除单独一个0）
      if (part.length > 1 && part.startsWith("0")) return false;
    }

    return true;
  };

  console.log(isValidIP(line.trim()) ? "YES" : "NO");
});
