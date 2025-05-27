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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let pre = 0;
  function convert(root) {
    if (root === null) return;
    convert(root.right);
    root.val += pre;
    pre = root.val;
    convert(root.left);
  }

  convert(root);

  return root;
};
