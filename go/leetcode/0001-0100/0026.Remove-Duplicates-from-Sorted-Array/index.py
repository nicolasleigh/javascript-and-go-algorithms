"""
Explanation:

Edge Case: If nums is empty, we return 0 because there are no elements.

Pointer i: This pointer keeps track of the last unique element. Initially, it starts at the first element (i = 0).

Pointer j: This pointer scans through the array starting from the second element (j = 1).

Inside the loop, if nums[j] is not equal to nums[i], it means we found a new unique element, so we increment i and update nums[i] with nums[j].

Return value: The function returns i + 1, which represents the length of the array after removing duplicates.
"""

# 26. Remove Duplicates from Sorted Array
def removeDuplicates(nums):
    if not nums:
        return 0

    i = 0
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]

    return i + 1
