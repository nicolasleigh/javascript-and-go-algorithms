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

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let newHead = { next: head }; // dummy node
  let len = 0;
  let cur = newHead;

  // Move cur to the last node and record length
  while (cur.next) {
    len++;
    cur = cur.next;
  }

  // Make it a circular list
  cur.next = head;

  // If no rotation needed
  let step = len - (k % len);
  if (step === len) {
    cur.next = null; // break the circle
    return head;
  }

  cur = newHead;
  while (step > 0) {
    cur = cur.next;
    step--;
  }

  const res = cur.next;
  cur.next = null; // break the circle

  return res;
}
