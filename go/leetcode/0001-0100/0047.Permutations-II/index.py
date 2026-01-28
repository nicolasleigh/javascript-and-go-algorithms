def permuteUnique(nums):
    res = []
    comb = []
    nums.sort()  # Step 1: Sort to detect duplicates
    used = [False] * len(nums)  # Step 2: Track used indexes

    def backtrack():
        if len(comb) == len(nums):
            res.append(comb[:])  # Copy current combination
            return

        for i in range(len(nums)):
            if used[i]:  # Skip if already used
                continue

            # Step 3: Skip duplicates at the same tree level
            if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
                continue

            used[i] = True
            comb.append(nums[i])
            backtrack()
            comb.pop()
            used[i] = False

    backtrack()
    return res
