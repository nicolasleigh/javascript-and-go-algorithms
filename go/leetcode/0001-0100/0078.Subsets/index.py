def subsets(nums):
    res = []
    comb = []

    def backtrack(start):
        res.append(list(comb))  # copy current subset

        for i in range(start, len(nums)):
            comb.append(nums[i])
            backtrack(i + 1)
            comb.pop()  # backtrack

    backtrack(0)
    return res
