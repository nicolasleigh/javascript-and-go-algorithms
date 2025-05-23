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
var rob = function (root) {
  function robRec(root) {
    if (!root) return [0, 0];

    let left = robRec(root.left);
    let right = robRec(root.right);

    let notRobThis = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    let robThis = root.val + left[0] + right[0];

    return [notRobThis, robThis];
  }

  let res = robRec(root);
  return Math.max(res[0], res[1]);
};
