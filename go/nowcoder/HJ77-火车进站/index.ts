const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", (line) => {
  inputs.push(line.trim());
});

rl.on("close", () => {
  const nums = inputs[1].split(" ");
  const res = [];

  function dfs(waitIn: string[], stack: string[], output: string[]) {
    // 所有火车都已出栈，记录结果
    if (waitIn.length === 0 && stack.length === 0) {
      res.push(output.join(" "));
      return;
    }

    // 进栈操作
    if (waitIn.length > 0) {
      const next = waitIn[0];
      dfs(waitIn.slice(1), [...stack, next], output);
    }

    // 出栈操作
    if (stack.length > 0) {
      const top = stack.pop();
      dfs(waitIn, stack, [...output, top]);
    }
  }

  dfs(nums, [], []);

  // 按字典序排序后输出
  res.sort().forEach((line) => console.log(line));
});
