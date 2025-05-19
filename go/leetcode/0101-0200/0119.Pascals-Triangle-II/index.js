/**
 * @param {number} rowIndex
 * @return {number[]}
 */

function getRow(rowIndex) {
  const triangle = generate(rowIndex + 1);
  return triangle[rowIndex];
}

// Same as 118
function generate(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(row);
  }
  return result;
}

// Solution 2
function getRow(rowIndex) {
  const row = Array(rowIndex + 1).fill(0);
  row[0] = 1;

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] += row[j - 1];
    }
  }

  return row;
}
