class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rotateRight(head, k):
    if not head or not head.next or k == 0:
        return head

    # Step 1: Calculate the length of the list
    length = 1
    current = head
    while current.next:
        length += 1
        current = current.next

    # Step 2: If no rotation is needed (k is a multiple of length)
    k = k % length
    if k == 0:
        return head

    # Step 3: Make the list circular
    current.next = head

    # Step 4: Find the new head
    steps_to_new_head = length - k
    new_tail = head
    for _ in range(steps_to_new_head - 1):
        new_tail = new_tail.next

    # Step 5: Break the circle and return the new head
    new_head = new_tail.next
    new_tail.next = None
    return new_head
