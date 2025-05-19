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

function maxPathSum(root) {
  let maxPath = -Infinity;

  function getMaxGain(node) {
    if (node === null) return 0;

    // Recursively get the maximum gain from the left and right subtrees
    const gainOnLeft = Math.max(getMaxGain(node.left), 0);
    const gainOnRight = Math.max(getMaxGain(node.right), 0);

    // Current path sum includes the node itself and the best from both sides
    const currentMaxPath = node.val + gainOnLeft + gainOnRight;

    // Update global max path if needed
    maxPath = Math.max(maxPath, currentMaxPath);

    // Return the max gain if we continue the path through this node
    return node.val + Math.max(gainOnLeft, gainOnRight);
  }

  getMaxGain(root);
  return maxPath;
}
