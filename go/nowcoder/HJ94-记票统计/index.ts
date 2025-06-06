const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
  if (input.length === 4) {
    processInput(input);
    rl.close();
  }
});

function processInput(lines) {
  const candidateNames = lines[1].split(" ");
  const voteNames = lines[3].split(" ");

  const voteCount = {};
  let invalidCount = 0;

  // 初始化每个候选人票数为0
  for (const name of candidateNames) {
    voteCount[name] = 0;
  }

  // 统计票数
  for (const vote of voteNames) {
    // if (voteCount.hasOwnProperty(vote)) {
    if (Object.hasOwn(voteCount, vote)) {
      voteCount[vote]++;
    } else {
      invalidCount++;
    }
  }

  // 输出
  for (const name of candidateNames) {
    console.log(`${name} : ${voteCount[name]}`);
  }
  console.log(`Invalid : ${invalidCount}`);
}
