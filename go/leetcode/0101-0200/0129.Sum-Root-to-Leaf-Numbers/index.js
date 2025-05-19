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

function sumNumbers(root) {
  let res = 0;

  function preorder(node, sum) {
    if (node === null) return;

    sum = sum * 10 + node.val;

    // If it's a leaf node
    if (node.left === null && node.right === null) {
      res += sum;
      return;
    }

    preorder(node.left, sum);
    preorder(node.right, sum);
  }

  preorder(root, 0);
  return res;
}
