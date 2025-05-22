/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function isPalindrome(head) {
  if (!head || !head.next) return true;

  // Step 1: Find middle using slow and fast pointers
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let secondHalf = reverseList(slow);

  // Step 3: Compare both halves
  let firstHalf = head;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}

function reverseList(head) {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// Solution 2
function isPalindrome(head) {
  const values = [];

  // Convert linked list to array
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  // Check for palindrome
  let i = 0;
  let j = values.length - 1;
  while (i < j) {
    if (values[i] !== values[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
