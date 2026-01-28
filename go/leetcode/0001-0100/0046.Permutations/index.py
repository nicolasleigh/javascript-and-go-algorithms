def permute(nums):
    res = []
    comb = []
    used_set = set()

    def backtrack():
        if len(comb) == len(nums):
            res.append(comb[:])  # Append a copy of comb to the result
            return

        for num in nums:
            if num in used_set:
                continue

            used_set.add(num)
            comb.append(num)
            backtrack()
            comb.pop()
            used_set.remove(num)

    backtrack()
    return res
