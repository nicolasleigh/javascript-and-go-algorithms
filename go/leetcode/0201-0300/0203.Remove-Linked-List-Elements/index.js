/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) return head;
  let temp = head;
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

// Solution 2
function removeElements(head, val) {
  const dummy = new ListNode(0); // dummy node before head
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next; // remove current node
    } else {
      prev = curr; // move prev only when not removing
    }
    curr = curr.next;
  }

  return dummy.next;
}
