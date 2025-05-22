/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root;
  const left = root.left ? lowestCommonAncestor(root.left, p, q) : null;
  const right = root.right ? lowestCommonAncestor(root.right, p, q) : null;
  // Or just using:
  // const left = lowestCommonAncestor(root.left, p, q);
  // const right = lowestCommonAncestor(root.right, p, q);
  if (left !== null && right !== null) return root;
  if (left === null && right === null) return null;
  return left !== null ? left : right;
};

// =============
function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
}
