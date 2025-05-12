// 1971. Find if Path Exists in Graph
// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let graph = new Map();
  let visited = new Set();

  for (let [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  function dfs(node) {
    if (node === destination) return true;
    visited.add(node);
    for (let neighbor of graph.get(node)) {
      if (visited.has(neighbor)) continue;
      if (dfs(neighbor) === true) return true;
    }
    return false;
  }

  return dfs(source);
};
