
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
// 24. Swap Nodes in Pairs
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let cur = dummyHead;
  while (cur.next != null && cur.next.next != null) {
    let t1 = cur.next;
    let t2 = cur.next.next;
    cur.next = t2;
    t1.next = t2.next;
    t2.next = t1;
    cur = cur.next.next;
  }
  return dummyHead.next;
};
