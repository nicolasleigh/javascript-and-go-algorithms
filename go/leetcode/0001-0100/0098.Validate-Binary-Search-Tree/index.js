// 98. Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const tempArr = [];

  function inorder(root) {
    // if (root === null) return;
    root.left && inorder(root.left);
    tempArr.push(root.val);
    root.right && inorder(root.right);
  }

  inorder(root);

  for (let i = 0; i < tempArr.length - 1; i++) {
    if (tempArr[i] >= tempArr[i + 1]) return false;
  }

  return true;
};
