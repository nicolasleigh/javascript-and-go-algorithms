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

var validPath = function (n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  // Build adjacency list
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);

  const dfs = (node) => {
    if (node === destination) return true;
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        if (dfs(neighbor)) return true;
      }
    }
    return false;
  };

  return dfs(source);
};
