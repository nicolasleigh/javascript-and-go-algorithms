// 139. Word Break

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // dp[i] means: can s[0..i-1] be segmented using the wordDict?
  let dp = Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // dp[i] is true if dp[j] is true and s.substring(j, i) is in wordDict
      // Without dp[j]=true constrain, the third case 's="catsandog"' will return true
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
