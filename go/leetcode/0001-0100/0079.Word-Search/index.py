def exist(board, word):
    rows = len(board)
    cols = len(board[0])

    def backtrack(i, j, k):
        # All characters matched
        if k == len(word):
            return True

        # Out of bounds or character mismatch
        if (
            i < 0 or i >= rows or
            j < 0 or j >= cols or
            board[i][j] != word[k]
        ):
            return False

        # Temporarily mark as visited
        temp = board[i][j]
        board[i][j] = " "

        # Explore four directions
        found = (
            backtrack(i + 1, j, k + 1) or
            backtrack(i - 1, j, k + 1) or
            backtrack(i, j + 1, k + 1) or
            backtrack(i, j - 1, k + 1)
        )

        # Restore original value
        board[i][j] = temp
        return found

    # Try starting from every cell
    for i in range(rows):
        for j in range(cols):
            if backtrack(i, j, 0):
                return True

    return False
