// 116. Populating Next Right Pointers in Each Node
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length; // important to store the length of the queue
    let prev;
    let curr;

    for (let i = 0; i < levelSize; i++) {
      if (i === 0) {
        prev = queue.shift();
      } else {
        curr = queue.shift();
        prev.next = curr;
        prev = curr;
      }
      if (prev.left) queue.push(prev.left);
      if (prev.right) queue.push(prev.right);
    }
    prev.next = null;
  }
  return root;
};
