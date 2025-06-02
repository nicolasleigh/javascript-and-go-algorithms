const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const maze = input.slice(1).map((row) => row.split(" ").map(Number));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const path = [];
  let result = [];

  function dfs(x: number, y: number) {
    if (x < 0 || x >= n || y < 0 || y >= m || maze[x][y] === 1 || visited[x][y]) {
      return false;
    }

    visited[x][y] = true;
    path.push([x, y]);

    if (x === n - 1 && y === m - 1) {
      result = [...path]; // 找到目标，保存路径
      return true;
    }

    const dirs = [
      [1, 0], // 下
      [0, 1], // 右
      [-1, 0], // 上
      [0, -1], // 左
    ];

    for (let [dx, dy] of dirs) {
      if (dfs(x + dx, y + dy)) return true;
    }

    path.pop(); // 回溯
    return false;
  }

  dfs(0, 0);

  for (let [x, y] of result) {
    console.log(`(${x},${y})`);
  }
});
