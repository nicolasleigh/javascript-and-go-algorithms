/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const MOD = 1e9 + 7;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const memo = new Map();

  function dfs(row, col, remainingMoves) {
    const key = `${row},${col},${remainingMoves}`;
    if (memo.has(key)) return memo.get(key);

    if (row < 0 || row >= m || col < 0 || col >= n) return 1;
    if (remainingMoves === 0) return 0;

    let count = 0;
    for (let [dx, dy] of dirs) {
      count = (count + dfs(row + dx, col + dy, remainingMoves - 1)) % MOD;
    }

    memo.set(key, count);
    return count;
  }

  return dfs(startRow, startColumn, maxMove);
};
