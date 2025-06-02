const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  getLongestPalindromeLength(line);
});

// 相同：0005.Longest-Palindromic-Substring
// 相似：0516.Longest-Palindromic-Subsequence

// 中心扩展法
function getLongestPalindromeLength(s: string) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // 以 i 为中心扩展（奇数长度）
    maxLen = Math.max(maxLen, expandFromCenter(s, i, i));
    // 以 i 和 i+1 为中心扩展（偶数长度）
    maxLen = Math.max(maxLen, expandFromCenter(s, i, i + 1));
  }

  console.log(maxLen);
}

function expandFromCenter(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // 返回长度
  return right - left - 1;
}

// 动态规划 DP - 二维
function getLongestPalindromeLength2(s: string) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  let maxLen = 1;

  // from bottom to top, from left to right, because dp[i][j] depends on dp[i+1][j-1]
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[i][j] = true; // 长度为1或2 或 "aba" 这种结构
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j]) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  console.log(maxLen);
}

// 动态规划 DP - 一维
function getLongestPalindromeLength3(s: string) {
  const n = s.length;
  let maxLen = 1;
  const dp = Array(n).fill(false);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= i; j--) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[j] = true; // "a", "aa", or "aba"
        } else {
          dp[j] = dp[j - 1]; // dp[i+1][j-1] in 1D
        }
      } else {
        dp[j] = false; // 重置为false
      }

      if (dp[j]) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  console.log(maxLen);
}
