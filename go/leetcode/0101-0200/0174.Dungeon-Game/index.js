/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;

  // Initialize a (m+1) x (n+1) matrix filled with Infinity
  // hp[i][j] represents the minimum health the knight needs to enter cell (i, j) safely and still be able to rescue the princess.
  const hp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity));

  // Dummy initialization just below and to the right of the princess
  hp[m][n - 1] = 1;
  hp[m - 1][n] = 1;

  // Fill the table bottom-up
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const need = Math.min(hp[i + 1][j], hp[i][j + 1]) - dungeon[i][j];
      hp[i][j] = need <= 0 ? 1 : need;
    }
  }

  return hp[0][0];
};
