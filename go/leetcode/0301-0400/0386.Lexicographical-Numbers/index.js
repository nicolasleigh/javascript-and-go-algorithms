/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];

  const dfs = (cur) => {
    if (cur > n) return;
    result.push(cur);
    for (let i = 0; i <= 9; i++) {
      const next = cur * 10 + i;
      if (next > n) break;
      dfs(next);
    }
  };

  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }

  return result;
};
