// 797. All Paths From Source to Target
// https://leetcode.com/problems/all-paths-from-source-to-target/description/

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
