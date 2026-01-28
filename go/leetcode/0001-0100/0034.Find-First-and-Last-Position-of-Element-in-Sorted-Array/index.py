"""
Explanation:

Main Function (searchRange):

    Calls two helper functions: searchFirstEqualElement and searchLastEqualElement to find the first and last occurrence of the target, respectively.

First Occurrence Search (searchFirstEqualElement):

    A binary search that keeps narrowing down the search range until it finds the first occurrence of the target.

    If the middle element is equal to the target, it checks if it is the first occurrence by verifying that the previous element is not equal to the target. If it is, it adjusts the high pointer to continue searching the left half.

Last Occurrence Search (searchLastEqualElement):

    Similar to searchFirstEqualElement, but this search looks for the last occurrence of the target.

    If the middle element is equal to the target, it checks if it is the last occurrence by verifying that the next element is not equal to the target. If it is, it adjusts the low pointer to continue searching the right half.

Time Complexity:

    Both binary search functions have a time complexity of O(log n), making the overall time complexity of the searchRange function O(log n).
"""

def searchRange(nums, target):
    return [searchFirstEqualElement(nums, target), searchLastEqualElement(nums, target)]

# Binary search to find the first occurrence of the target
def searchFirstEqualElement(nums, target):
    low, high = 0, len(nums) - 1

    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] > target:
            high = mid - 1
        elif nums[mid] < target:
            low = mid + 1
        else:
            if mid == 0 or nums[mid - 1] != target:
                return mid
            high = mid - 1

    return -1

# Binary search to find the last occurrence of the target
def searchLastEqualElement(nums, target):
    low, high = 0, len(nums) - 1

    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] > target:
            high = mid - 1
        elif nums[mid] < target:
            low = mid + 1
        else:
            if mid == len(nums) - 1 or nums[mid + 1] != target:
                return mid
            low = mid + 1

    return -1
