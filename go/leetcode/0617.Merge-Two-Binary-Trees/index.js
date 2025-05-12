// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const resNode = new TreeNode(root1.val + root2.val);
  resNode.left = mergeTrees(root1.left, root2.left);
  resNode.right = mergeTrees(root1.right, root2.right);
  return resNode;
};
