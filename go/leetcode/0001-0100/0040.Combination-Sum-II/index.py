def combinationSum2(candidates, target):
    res = []
    comb = []
    sum_val = 0
    candidates.sort()  # Sort candidates to handle duplicates

    def backtrack(start):
        nonlocal sum_val
        if sum_val > target:
            return

        if sum_val == target:
            res.append(comb[:])  # Make a copy of comb when adding to result
            return

        for i in range(start, len(candidates)):
            # Skip duplicates: if the current element is the same as the previous one, skip it
            if i > start and candidates[i] == candidates[i - 1]:
                continue
            comb.append(candidates[i])
            sum_val += candidates[i]
            backtrack(i + 1)  # Move to the next element to avoid reuse
            comb.pop()  # Backtrack
            sum_val -= candidates[i]

    backtrack(0)
    return res
