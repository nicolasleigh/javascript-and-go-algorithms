def sortColors(nums):
    zeros = 0
    ones = 0

    # Count 0s and 1s
    for v in nums:
        if v == 0:
            zeros += 1
        elif v == 1:
            ones += 1

    # Fill in 0s
    for i in range(zeros):
        nums[i] = 0

    # Fill in 1s
    for i in range(zeros, zeros + ones):
        nums[i] = 1

    # Fill in 2s
    for i in range(zeros + ones, len(nums)):
        nums[i] = 2
