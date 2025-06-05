const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const password = line.trim() as string;

  let score = 0;

  // 1. 长度
  const len = password.length;
  if (len <= 4) score += 5;
  else if (len >= 5 && len <= 7) score += 10;
  else if (len >= 8) score += 25;

  // 2. 字母
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  if (hasLower && hasUpper) score += 20;
  else if (hasLower || hasUpper) score += 10;

  // 3. 数字
  const numCount = (password.match(/\d/g) || []).length;
  if (numCount === 1) score += 10;
  else if (numCount > 1) score += 20;

  // 4. 符号
  const symbolCount = (password.match(/[^a-zA-Z0-9]/g) || []).length;
  if (symbolCount === 1) score += 10;
  else if (symbolCount > 1) score += 25;

  // 5. 奖励项
  if ((hasLower || hasUpper) && numCount > 0) {
    if (symbolCount > 0) {
      if (hasLower && hasUpper) score += 5;
      else score += 3;
    } else {
      score += 2;
    }
  }

  // 6. 输出等级
  if (score >= 90) console.log("VERY_SECURE");
  else if (score >= 80) console.log("SECURE");
  else if (score >= 70) console.log("VERY_STRONG");
  else if (score >= 60) console.log("STRONG");
  else if (score >= 50) console.log("AVERAGE");
  else if (score >= 25) console.log("WEAK");
  else console.log("VERY_WEAK");
});
