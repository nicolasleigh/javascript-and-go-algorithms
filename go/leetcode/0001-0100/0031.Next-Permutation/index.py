"""
Explanation:

Finding the first decreasing element:

    We start from the second-to-last element (i = len(nums) - 2) and move leftwards until we find the first element (nums[i]) that is less than its next element (nums[i + 1]).

Finding the element just larger than nums[i]:

    If we found such an element (i >= 0), we search for the smallest element to the right of nums[i] that is larger than nums[i]. This element is found by iterating backward from the end of the list (j).

Swapping:

    The function swap(nums, i, j) swaps the elements at positions i and j.

Reversing the suffix:

    After swapping, the elements to the right of i are in descending order, so we reverse them to get the smallest lexicographical order.
"""

# Hard
def nextPermutation(nums):
    i = len(nums) - 2

    # Step 1: Find the first decreasing element from the right
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1

    if i >= 0:
        # Step 2: Find the element just larger than nums[i] to its right
        j = len(nums) - 1
        while j > i and nums[j] <= nums[i]:
            j -= 1
        swap(nums, i, j)

    # Step 3: Reverse the elements to the right of i
    reverse(nums, i + 1, len(nums) - 1)

def swap(nums, i, j):
    nums[i], nums[j] = nums[j], nums[i]

def reverse(nums, start, end):
    while start < end:
        swap(nums, start, end)
        start += 1
        end -= 1
