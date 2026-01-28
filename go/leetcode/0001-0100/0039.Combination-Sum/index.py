def combinationSum(candidates, target):
    res = []
    comb = []
    sum_val = 0

    def backtrack(start):
        nonlocal sum_val
        if sum_val > target:
            return

        if sum_val == target:
            res.append(comb[:])
            return

        for i in range(start, len(candidates)):
            comb.append(candidates[i])
            sum_val += candidates[i]
            backtrack(i)  # Allow the same element to be used again
            comb.pop()
            sum_val -= candidates[i]

    backtrack(0)
    return res
