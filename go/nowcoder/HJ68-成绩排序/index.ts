const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const order = parseInt(input[1]); // 0: 降序, 1: 升序

  // 加入 index 保证稳定排序
  const students = input.slice(2).map((item, i) => {
    const [name, score] = item.split(" ");
    return {
      name,
      score: parseInt(score),
      index: i, // 保留原始输入顺序
    };
  });

  students.sort((a, b) => {
    if (a.score !== b.score) {
      return order === 0 ? b.score - a.score : a.score - b.score;
    } else {
      return a.index - b.index; // 分数相同按输入顺序排序
    }
  });

  for (const stu of students) {
    console.log(`${stu.name} ${stu.score}`);
  }
});
