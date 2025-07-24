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
 * @return {number[]}
 */
var findMode = function (root) {
  let map = new Map();
  let maxCount = Number.MIN_SAFE_INTEGER;
  let result = [];

  const inorder = function (root) {
    root.left && inorder(root.left);
    map.set(root.val, (map.get(root.val) || 0) + 1);
    root.right && inorder(root.right);
  };

  inorder(root);

  for (let [key, value] of map) {
    if (value > maxCount) {
      result = [];
      maxCount = value;
      result.push(key);
    } else if (value === maxCount) {
      result.push(key);
    }
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let currentVal = null;
  let currentCount = 0;
  let maxCount = 0;
  const modes = [];

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);

    if (node.val === currentVal) {
      currentCount++;
    } else {
      currentVal = node.val;
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      modes.length = 0; // reset
      modes.push(currentVal);
    } else if (currentCount === maxCount) {
      modes.push(currentVal);
    }

    inorder(node.right);
  };

  inorder(root);
  return modes;
};
