def generateMatrix(n):
    # Create an n x n matrix filled with 0
    res = [[0] * n for _ in range(n)]
    num = 1
    left, right = 0, n - 1
    top, bottom = 0, n - 1

    while left <= right and top <= bottom:
        # Left → Right
        for col in range(left, right + 1):
            res[top][col] = num
            num += 1
        top += 1

        # Top ↓ Bottom
        for row in range(top, bottom + 1):
            res[row][right] = num
            num += 1
        right -= 1

        # Right ← Left
        for col in range(right, left - 1, -1):
            res[bottom][col] = num
            num += 1
        bottom -= 1

        # Bottom ↑ Top
        for row in range(bottom, top - 1, -1):
            res[row][left] = num
            num += 1
        left += 1

    return res
