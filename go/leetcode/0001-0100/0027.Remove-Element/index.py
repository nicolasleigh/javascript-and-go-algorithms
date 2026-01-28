"""
Explanation:

insertPos: Keeps track of where the next non-val element should be placed.

Loop: We iterate through the nums array and check each element.

    If an element is not equal to val, we move it to the position indicated by insertPos and increment insertPos.

Return Value: After the loop, insertPos will represent the number of elements in the array that are not equal to val. This is the new length of the array with the unwanted elements removed.
"""

# 27. Remove Element
def removeElement(nums, val):
    insertPos = 0

    # Loop through all elements in the array
    for num in nums:
        # If the current element is not the one we want to remove
        if num != val:
            # Place it at the current insert position
            nums[insertPos] = num
            insertPos += 1  # Move the insert position forward

    # The first `insertPos` elements are now the result
    return insertPos
