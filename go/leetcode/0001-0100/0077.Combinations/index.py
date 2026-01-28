# 77. Combinations
def combine(n, k):
    res = []
    comb = []

    def backtrack(start):
        if len(comb) == k:
            res.append(list(comb))  # make a copy
            return

        for num in range(start, n + 1):
            comb.append(num)
            backtrack(num + 1)
            comb.pop()  # backtrack

    backtrack(1)
    return res
