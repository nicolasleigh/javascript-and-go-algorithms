def minDistance(word1: str, word2: str) -> int:
    # dp[i][j] = minimum operations to convert word1[0:i] to word2[0:j]
    m, n = len(word1), len(word2)

    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    # Convert word1[0:i] -> "" (all deletions)
    for i in range(1, m + 1):
        dp[i][0] = i

    # Convert "" -> word2[0:j] (all insertions)
    for j in range(1, n + 1):
        dp[0][j] = j

    # Fill DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(
                    dp[i - 1][j - 1] + 1,  # replace
                    dp[i - 1][j] + 1,      # delete
                    dp[i][j - 1] + 1       # insert
                )

    return dp[m][n]
