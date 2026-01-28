def uniquePaths(m, n):
    # Create a 2D list dp where dp[i][j] represents the number of unique paths to (i, j)
    dp = [[0] * n for _ in range(m)]

    # Base case: there's only 1 way to reach any cell in the first row or first column
    for i in range(m):
        dp[i][0] = 1

    for i in range(n):
        dp[0][i] = 1

    # Fill the rest of the dp table using the recurrence relation
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    # The result is the number of unique paths to the bottom-right corner (m-1, n-1)
    return dp[m - 1][n - 1]
