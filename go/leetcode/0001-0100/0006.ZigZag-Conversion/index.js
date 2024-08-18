/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(s, numRows) {
  if (numRows === 1) return s; // Special case where numRows is 1

  const matrix = Array.from({ length: numRows }, () => []);
  let down = 0;
  let up = numRows - 2;
  let i = 0;

  while (i < s.length) {
    if (down < numRows) {
      matrix[down].push(s[i]);
      down++;
      i++;
    } else if (up > 0) {
      matrix[up].push(s[i]);
      up--;
      i++;
    } else {
      up = numRows - 2;
      down = 0;
    }
  }

  let solution = "";
  for (const row of matrix) {
    solution += row.join("");
  }

  return solution;
}
