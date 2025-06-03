const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", function (line) {
  inputs.push(line.trim());

  if (inputs.length === 2) {
    console.log(minDistance(inputs[0], inputs[1]));
  }
});

// 相同：LeetCode 72. Edit Distance
function minDistance(word1, word2) {
  // dp[i][j] means the minimum number of operations to convert word1[0...i-1] to word2[0...j-1].
  let dp = Array(word1.length + 1)
    .fill(0)
    .map(() => Array(word2.length + 1).fill(0));

  // transforming word1[0...i-1] into an empty string requires i deletions.
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  // transforming an empty string into word2[0...j-1] requires j insertions.
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  // dp[i][j] means the minimum number of operations required to convert word1[0..i-1] to word2[0..j-1]
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // replace the character at position i-1 in word1 with the character at position j-1 in word2.
          dp[i - 1][j] + 1, // delete the character at position i-1 in word1.
          dp[i][j - 1] + 1 // insert the character at position j-1 in word2 into word1 at position i.
        );
      }
    }
  }

  return dp[word1.length][word2.length];
}
