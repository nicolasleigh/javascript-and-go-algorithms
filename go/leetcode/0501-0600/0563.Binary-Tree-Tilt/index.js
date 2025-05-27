/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left || null;
 *     this.right = right || null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let totalTilt = 0;

  function dfs(node) {
    if (!node) return 0;

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);

    const tilt = Math.abs(leftSum - rightSum);
    totalTilt += tilt;

    return node.val + leftSum + rightSum;
  }

  dfs(root);
  return totalTilt;
};
