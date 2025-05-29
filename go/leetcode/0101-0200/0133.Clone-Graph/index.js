/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();

  const dfs = (n) => {
    if (visited.has(n)) {
      return visited.get(n);
    }

    // Clone the current node
    const clone = new Node(n.val);
    visited.set(n, clone);

    // Recursively clone neighbors
    for (const neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};
