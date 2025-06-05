const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const str = line.trim() as string;
  console.log(longestPalindrome(str).length);
});

// Same as the LeetCode 0005.Longest-Palindromic-Substring
function longestPalindrome(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    // If the length of the palindrome is odd
    res = maxPalindrome(s, i, i, res);
    // If the length of the palindrome is even
    res = maxPalindrome(s, i, i + 1, res);
  }

  return res;
}

function maxPalindrome(s, left, right, res) {
  let sub = "";

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    sub = s.substring(left, right + 1);
    left--;
    right++;
  }

  if (sub.length > res.length) {
    return sub;
  }

  return res;
}
