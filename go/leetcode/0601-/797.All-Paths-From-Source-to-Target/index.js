/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let res = [];
  let path = [];

  function dfs(start) {
    if (start === graph.length - 1) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < graph[start].length; i++) {
      path.push(graph[start][i]);
      dfs(graph[start][i]);
      path.pop();
    }
  }

  path.push(0);
  dfs(0);
  return res;
};

var allPathsSourceTarget = function (graph) {
  const result = [];
  const target = graph.length - 1;

  const dfs = (node, path) => {
    if (node === target) {
      result.push([...path]);
      return;
    }

    for (const neighbor of graph[node]) {
      path.push(neighbor);
      dfs(neighbor, path);
      path.pop(); // backtrack
    }
  };

  dfs(0, [0]);
  return result;
};
