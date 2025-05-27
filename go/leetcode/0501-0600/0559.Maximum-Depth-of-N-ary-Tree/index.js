/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let depth = 0;
  for (let child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }

  return depth + 1;
};

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let res = 0;

  const dfs = (node, count) => {
    if (node.children.length === 0) {
      res = Math.max(res, count);
      return;
    }

    for (let child of node.children) {
      count++;
      dfs(child, count);
      count--; // backtrack
    }
  };

  dfs(root, 1);
  return res;
};
