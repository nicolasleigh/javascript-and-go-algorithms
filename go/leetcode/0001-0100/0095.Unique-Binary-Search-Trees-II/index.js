/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function generateTrees(n) {
  if (n === 0) return [];
  return buildTree(1, n);
}

function buildTree(start, end) {
  const trees = [];

  if (start > end) {
    trees.push(null);
    return trees;
  }

  // Try every number from start to end as the root
  for (let i = start; i <= end; i++) {
    const leftSubtrees = buildTree(start, i - 1);
    const rightSubtrees = buildTree(i + 1, end);

    // Combine each left and right subtree with root i
    for (const left of leftSubtrees) {
      for (const right of rightSubtrees) {
        const root = new TreeNode(i);
        root.left = left;
        root.right = right;
        trees.push(root);
      }
    }
  }

  return trees;
}
