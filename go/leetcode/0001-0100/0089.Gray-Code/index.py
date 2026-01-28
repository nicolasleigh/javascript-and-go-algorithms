def grayCode(n):
    res = [0]

    for i in range(n):
        # reflect current list and add the i-th bit
        for k in range(len(res) - 1, -1, -1):
            res.append(res[k] | (1 << i))

    return res
