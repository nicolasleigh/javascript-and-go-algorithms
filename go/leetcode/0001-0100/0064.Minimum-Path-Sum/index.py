def minPathSum(grid):
    m = len(grid)
    n = len(grid[0])

    # Create a dp array to store the minimum path sum to reach each cell
    dp = [[0] * n for _ in range(m)]

    # Initialize the top-left corner (starting point)
    dp[0][0] = grid[0][0]

    # Initialize the first column
    for i in range(1, m):
        dp[i][0] = grid[i][0] + dp[i - 1][0]

    # Initialize the first row
    for j in range(1, n):
        dp[0][j] = grid[0][j] + dp[0][j - 1]

    # Fill the dp array with the minimum path sum for the rest of the cells
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]

    # The result is the value in the bottom-right corner
    return dp[m - 1][n - 1]
