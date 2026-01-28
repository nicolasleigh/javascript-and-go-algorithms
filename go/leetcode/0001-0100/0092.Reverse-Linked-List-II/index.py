# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverseBetween(head, left, right):
    if not head or left >= right:
        return head

    dummy = ListNode(0, head)
    pre = dummy

    # Move `pre` to the node before position `left`
    for _ in range(left - 1):
        pre = pre.next

    # `cur` points to the `left` node
    cur = pre.next

    # Reverse the sublist using head insertion
    for _ in range(right - left):
        tmp = pre.next
        pre.next = cur.next
        cur.next = cur.next.next
        pre.next.next = tmp

    return dummy.next
