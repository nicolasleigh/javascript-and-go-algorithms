/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 2. Add Two Numbers
function addTwoNumbers(l1, l2) {
  let head = new ListNode(0); // Dummy head
  let current = head;

  let n1 = 0;
  let n2 = 0;
  let carry = 0;
  let sum = 0;

  while (l1 || l2 || carry) {
    if (l1) {
      n1 = l1.val;
      l1 = l1.next;
    } else {
      n1 = 0;
    }

    if (l2) {
      n2 = l2.val;
      l2 = l2.next;
    } else {
      n2 = 0;
    }

    sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return head.next;
}
