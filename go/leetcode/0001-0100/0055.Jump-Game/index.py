def canJump(nums):
    canReach = 0

    for i in range(len(nums)):
        if i > canReach:  # Can't reach this index
            return False
        canReach = max(canReach, i + nums[i])

    return True
