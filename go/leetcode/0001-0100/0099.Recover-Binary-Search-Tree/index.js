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
 * @return {void} Do not return anything, modify root in-place instead.
 */

function recoverTree(root) {
  let first = null;
  let second = null;
  let prev = null;

  function inorder(node) {
    if (!node) return;

    // Traverse left subtree
    inorder(node.left);

    // Detect swapped nodes
    if (prev && prev.val >= node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }
    prev = node;

    // Traverse right subtree
    inorder(node.right);
  }

  inorder(root);

  // Swap the values of the two nodes
  if (first && second) {
    [first.val, second.val] = [second.val, first.val];
  }
}
