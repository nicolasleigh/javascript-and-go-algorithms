// Reservoir Sampling
// Reservoir Sampling lets you select a random item from a stream of unknown length with uniform probability using O(1) space.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let result = null;
    let current = this.head;
    let i = 1;

    while (current !== null) {
      // Pick current node's value with probability 1/i
      if (Math.floor(Math.random() * i) === 0) {
        result = current.val;
      }
      current = current.next;
      i++;
    }

    return result;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
