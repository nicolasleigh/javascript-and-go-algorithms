class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    head = ListNode(0)  # Dummy head
    current = head

    carry = 0

    while l1 or l2 or carry:
        n1 = l1.val if l1 else 0
        n2 = l2.val if l2 else 0

        sum_val = n1 + n2 + carry
        carry = sum_val // 10
        current.next = ListNode(sum_val % 10)
        current = current.next

        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next

    return head.next
