// 116. Populating Next Right Pointers in Each Node
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

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
  let queue = [];
  queue.push(root);
  if (!root) return root;

  while (queue.length) {
    let length = queue.length; // important to store the length of the queue
    let prev;
    let curr;
    for (let i = 0; i < length; i++) {
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
