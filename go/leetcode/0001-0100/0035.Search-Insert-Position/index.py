"""
Explanation:

Binary Search:

    We start with two pointers: low and high pointing to the start and end of the array, respectively.

    In each iteration, we calculate the middle index (mid).

    If nums[mid] equals the target, we return mid as the position.

    If nums[mid] is less than the target, we move the low pointer to mid + 1 to search the right half.

    If nums[mid] is greater than the target, we move the high pointer to mid - 1 to search the left half.

Final Return:

    If we exit the loop without finding the target, low will be at the position where the target should be inserted. This is the correct insert position for the target.
"""

def searchInsert(nums, target):
    low, high = 0, len(nums) - 1

    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return low
