def uniquePathsWithObstacles(obstacleGrid):
    m = len(obstacleGrid)
    n = len(obstacleGrid[0])

    # Create a 2D list dp to store the number of unique paths to each cell
    dp = [[0] * n for _ in range(m)]

    # Initialize the first column
    for i in range(m):
        if obstacleGrid[i][0] == 1:
            break
        dp[i][0] = 1

    # Initialize the first row
    for i in range(n):
        if obstacleGrid[0][i] == 1:
            break
        dp[0][i] = 1

    # Fill in the rest of the dp table
    for i in range(1, m):
        for j in range(1, n):
            if obstacleGrid[i][j] == 1:
                continue  # Skip if there's an obstacle
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]  # Number of paths from the top and left

    return dp[m - 1][n - 1]
