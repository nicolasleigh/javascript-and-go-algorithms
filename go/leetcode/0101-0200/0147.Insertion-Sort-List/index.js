// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return head;

  const dummy = new ListNode(0);
  let cur = head;
  let pre = dummy; // pre.next is null

  while (cur) {
    let next = cur.next;

    // Find the right place to insert cur
    // If the current node is greater than the pre.Next node, in this case, the current node cannot be the first node,
    // so we need to move the pre pointer to the right position and make the current node become the pre.Next node.
    while (pre.next && pre.next.val < cur.val) {
      pre = pre.next;
    }

    // Insert cur between pre and pre.next
    // If the current node is less than the pre.Next node, make the current node become the pre.Next node(aka the first node).
    cur.next = pre.next;
    pre.next = cur;

    // Reset pre and move to next node
    pre = dummy;
    cur = next;
  }

  return dummy.next;
};
