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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  // case 1
  if (root.left === null && root.right === null) {
    return null;
  }

  // case 2
  if (root.left === null || root.right === null) {
    return root.left !== null ? root.left : root.right;
  }

  // case 3
  // find the smallest node in the right subtree
  let temp = root.right;
  while (temp.left) {
    temp = temp.left;
  }
  root.val = temp.val;
  root.right = deleteNode(root.right, temp.val);
  return root;
};

var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Found the node to delete
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Case 3: Two children - find in-order successor
    let successor = findMin(root.right);
    root.val = successor.val; // Copy successor's value to root
    root.right = deleteNode(root.right, successor.val); // Delete successor
  }

  return root;
};

function findMin(node) {
  while (node.left) node = node.left;
  return node;
}
