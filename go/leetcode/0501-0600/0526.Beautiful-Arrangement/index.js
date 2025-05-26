/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let count = 0;
  const visited = new Array(n + 1).fill(false);

  function backtrack(pos) {
    if (pos > n) {
      count++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
        visited[i] = true;
        backtrack(pos + 1);
        visited[i] = false;
      }
    }
  }

  backtrack(1);
  return count;
};
