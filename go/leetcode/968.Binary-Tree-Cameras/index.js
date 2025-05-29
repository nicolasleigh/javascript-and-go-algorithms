/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* 
case 2:
left == 0 && right == 0: left and right are not covered
left == 1 && right == 0: left has camera, right is not covered
left == 0 && right == 1: left is not covered, right has camera
left == 0 && right == 2: left is not covered, right is covered
 left == 2 && right == 0: left is covered, right is not covered
 */

/* 
case 3:
left == 1 && right == 2: left has camera, right is covered
left == 2 && right == 1: left is covered, right has camera
left == 1 && right == 1: left and right have camera
 */

/*
0: not covered
1: has camera
2: covered
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
  let result = 0;

  function traversal(node) {
    if (node === null) return 2;

    let left = traversal(node.left);
    let right = traversal(node.right);

    // case 1: left and right are covered
    if (left === 2 && right === 2) return 0;

    // case 2: left or right are not covered
    if (left === 0 || right === 0) {
      result++;
      return 1;
    }

    // case 3: left or right has camera
    if (left === 1 || right === 1) return 2;

    return -1;
  }

  // case 4: root is not covered
  if (traversal(root) === 0) result++;

  return result;
};
