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

// BFS
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node);

      for (const item of node.children) {
        queue.push(item);
      }
    }
    result.push(level);
  }

  return result.length;
};

var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let count = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      for (const item of node.children) {
        queue.push(item);
      }
    }
    count++;
  }

  return count;
};
