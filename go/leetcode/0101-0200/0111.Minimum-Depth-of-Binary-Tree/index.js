// 111. Minimum Depth of Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length; // important to store the length of the queue
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (!node.left && !node.right) {
        // if the node has no children, return the length of the result array
        result.push(level);
        return result.length;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  
  return result.length; // return the length of the result array
};

// Solution 2
var minDepth = function (root) {
  if (!root) return 0;

  let queue = [{ node: root, depth: 1 }];

  while (queue.length) {
    const { node, depth } = queue.shift();

    // If we find a leaf node, return its depth
    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }
};

// Solution 3
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null) {
    return minDepth(root.right) + 1;
  }

  if (root.right === null) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
