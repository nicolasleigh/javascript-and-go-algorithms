"""
Explanation:

Binary Search Approach:

    We use a modified binary search where we check whether the left half or the right half of the array is sorted.

    If the left half is sorted, we check if the target lies within the range of the left half. If it does, we move the high pointer to narrow the search. Otherwise, we adjust the low pointer to continue searching in the unsorted half.

    If the right half is sorted, we do the same check but for the right half.

Time Complexity: This algorithm runs in O(log n) time, similar to regular binary search, because we reduce the search space by half in each iteration.
"""

def search(nums, target):
    low, high = 0, len(nums) - 1

    while low <= high:
        mid = low + (high - low) // 2

        if nums[mid] == target:
            return mid

        # Check if the left half is sorted
        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1

    return -1
