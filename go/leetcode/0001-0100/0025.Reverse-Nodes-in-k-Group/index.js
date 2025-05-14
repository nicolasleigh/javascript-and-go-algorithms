/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
  let node = head;
  for (let i = 0; i < k; i++) {
    if (!node) return head; // Not enough nodes to reverse
    node = node.next;
  }

  const newHead = reverse(head, node);
  head.next = reverseKGroup(node, k);
  return newHead;
};

function reverse(first, last) {
  let prev = last;
  while (first !== last) {
    const tmp = first.next;
    first.next = prev;
    prev = first;
    first = tmp;
  }
  return prev;
}
