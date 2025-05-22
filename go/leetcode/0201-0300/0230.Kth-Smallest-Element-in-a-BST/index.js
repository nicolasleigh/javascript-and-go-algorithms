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
 * @param {number} k
 * @return {number}
 */

function kthSmallest(root, k) {
  const res = [];
  inorder(root, res);
  return res[k - 1];
}

function inorder(node, res) {
  if (node === null) return;
  inorder(node.left, res);
  res.push(node.val);
  inorder(node.right, res);
}
