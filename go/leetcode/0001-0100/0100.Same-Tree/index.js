/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  } else if (p !== null && q !== null) {
    if (p.val !== q.val) {
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
}

function isSameTree(p, q) {
  function recur(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    let isSame1 = recur(node1.left, node2.left);
    let isSame2 = recur(node1.right, node2.right);
    return isSame1 && isSame2;
  }
  return recur(p, q);
}
