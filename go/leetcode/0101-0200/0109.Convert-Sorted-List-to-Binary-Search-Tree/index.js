/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function sortedListToBST(head) {
  const nums = [];

  // Convert the linked list to an array
  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }

  return createBST(nums);
}

function createBST(nums) {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = createBST(nums.slice(0, mid));
  root.right = createBST(nums.slice(mid + 1));

  return root;
}

// Solution 2
function sortedListToBST(head) {
  return buildBST(head, null);
}

function buildBST(start, end) {
  if (start === end) return null;

  // Find the middle node (slow pointer)
  let slow = start;
  let fast = start;

  while (fast !== end && fast.next !== end) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const root = new TreeNode(slow.val);
  root.left = buildBST(start, slow);
  root.right = buildBST(slow.next, end);

  return root;
}
