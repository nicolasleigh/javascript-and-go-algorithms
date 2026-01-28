# 80. Remove Duplicates from Sorted Array II
def removeDuplicates(nums):
    slow = 0

    for fast in range(len(nums)):
        # ensure each number appears at most twice
        if slow < 2 or nums[slow - 2] != nums[fast]:
            nums[slow] = nums[fast]
            slow += 1

    return slow
