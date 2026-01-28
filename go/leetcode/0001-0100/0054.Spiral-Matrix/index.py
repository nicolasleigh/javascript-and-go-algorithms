def spiralOrder(matrix):
    m, n = len(matrix), len(matrix[0]) if matrix else 0
    if m == 0 or n == 0:
        return []

    res = []
    visited = [[False] * n for _ in range(m)]

    dirs = [
        [0, 1],  # right →
        [1, 0],  # down ↓
        [0, -1], # left ←
        [-1, 0], # up ↑
    ]

    row, col, dir = 0, 0, 0

    for _ in range(m * n):
        res.append(matrix[row][col])
        visited[row][col] = True

        dx, dy = dirs[dir]
        next_row, next_col = row + dx, col + dy

        # If we are out of bounds or already visited, change direction
        if next_row < 0 or next_row >= m or next_col < 0 or next_col >= n or visited[next_row][next_col]:
            dir = (dir + 1) % 4  # Change direction (0 -> right, 1 -> down, 2 -> left, 3 -> up)

        row += dirs[dir][0]
        col += dirs[dir][1]

    return res
