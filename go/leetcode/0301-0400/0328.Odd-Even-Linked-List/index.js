/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function oddEvenList(head) {
  if (!head || !head.next) {
    return head; // If the list is empty or has only one node, return as is
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead; // Connect end of odd list to start of even list

  return head; // Return modified list
}
