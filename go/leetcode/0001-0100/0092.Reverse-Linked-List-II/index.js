/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 92. Reverse Linked List II
var reverseBetween = function (head, left, right) {
  if (!head || left >= right) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let pre = dummy;

  // Move `pre` to the node before `left`
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // `cur` points to the `left` node
  let cur = pre.next;

  // Perform head insertion to reverse the sublist
  for (let i = 0; i < right - left; i++) {
    let tmp = pre.next;
    pre.next = cur.next;
    cur.next = cur.next.next;
    pre.next.next = tmp;
  }

  return dummy.next;
};
