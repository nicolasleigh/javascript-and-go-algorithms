const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line: string) {
  const input = line.trim().split(" ").map(Number);
  let res = 0;
  const year = input[0];
  const month = input[1];
  const day = input[2];
  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const feb = isLeapYear ? 29 : 28;
  const days = {
    1: 31,
    2: feb,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  for (let i = 1; i < month; i++) {
    res += days[i];
  }

  console.log(res + day);
});
