/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  const n = s.length;

  // dp[i] stores the number of ways to decode the first i characters.
  const dp = new Array(n + 1).fill(0);

  // dp[0] = 1 means there's one way to decode an empty string.
  dp[0] = 1;

  // dp[1] depends on whether the first character is '0' (which can't be decoded).
  dp[1] = s[0] !== "0" ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    // If the last single digit (s[i-1]) is valid (1 to 9).
    const first = parseInt(s[i - 1]);

    // If the last two digits (s[i-2:i]) form a number between 10 and 26.
    const second = parseInt(s.slice(i - 2, i));

    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1];
    }
    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}
