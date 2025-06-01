const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// LeetCode 300. Longest Increasing Subsequence (Medium)
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    const n = parseInt(input[0]);
    const heights = input[1].split(" ").map(Number);
    console.log(getMinRemoved(n, heights));
  }
});

function getMinRemoved(n, heights) {
  const LIS = Array(n).fill(1); // 最长上升子序列
  const LDS = Array(n).fill(1); // 最长下降子序列

  // 从左往右找最长上升子序列
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (heights[j] < heights[i]) {
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
  }

  // 从右往左找最长下降子序列
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (heights[j] < heights[i]) {
        LDS[i] = Math.max(LDS[i], LDS[j] + 1);
      }
    }
  }

  let maxChoir = 0;
  for (let i = 0; i < n; i++) {
    // 当前元素被算了两次，故减去1
    maxChoir = Math.max(maxChoir, LIS[i] + LDS[i] - 1);
  }

  return n - maxChoir;
}
