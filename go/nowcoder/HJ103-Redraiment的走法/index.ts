const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", () => {
  const nums = input[1].split(/\s+/).map(Number);

  // 相同：LeetCode 0300.Longest-Increasing-Subsequence
  let dp = new Array(nums.length).fill(1);

  // dp[i] means the length of the longest increasing subsequence ending with nums[i]
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
});
