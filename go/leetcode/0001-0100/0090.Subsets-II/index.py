"""
Key ideas

1. Sort first
    Brings duplicates together so we can detect them.

2. Skip duplicates only at the same level

    if i > start and nums[i] == nums[i - 1]:
        continue

This ensures:

    [2] is generated once

    [2, 2] is still allowed
"""

 def subsetsWithDup(nums):
    res = []
    comb = []

    nums.sort()  # sort first to handle duplicates

    def backtrack(start):
        # add current combination
        res.append(comb[:])

        for i in range(start, len(nums)):
            # skip duplicates at the same recursion level
            if i > start and nums[i] == nums[i - 1]:
                continue

            comb.append(nums[i])
            backtrack(i + 1)
            comb.pop()

    backtrack(0)
    return res
