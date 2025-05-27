// Similar to the "98. Validate Binary Search Tree"
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
var getMinimumDifference = function (root) {
  const tempArr = [];
  let result = Number.MAX_SAFE_INTEGER; // NEW

  function inorderTraversal(root) {
    root.left && inorderTraversal(root.left);
    tempArr.push(root.val);
    root.right && inorderTraversal(root.right);
  }

  inorderTraversal(root);

  for (let i = 0; i < tempArr.length - 1; i++) {
    result = Math.min(result, tempArr[i + 1] - tempArr[i]); // NEW
  }

  return result;
};
