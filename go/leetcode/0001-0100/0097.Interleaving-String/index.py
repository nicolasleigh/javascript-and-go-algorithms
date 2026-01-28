def isInterleave(s1: str, s2: str, s3: str) -> bool:
    m, n, l = len(s1), len(s2), len(s3)

    # If lengths don't match, return False
    if m + n != l:
        return False

    # dp[i][j] means s3[0..i+j-1] can be formed by interleaving s1[0..i-1] and s2[0..j-1]
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True

    # Fill the first column (using only s1)
    for i in range(1, m + 1):
        dp[i][0] = dp[i - 1][0] and s1[i - 1] == s3[i - 1]

    # Fill the first row (using only s2)
    for j in range(1, n + 1):
        dp[0][j] = dp[0][j - 1] and s2[j - 1] == s3[j - 1]

    # Fill the rest of the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            from_s1 = dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]
            from_s2 = dp[i][j - 1] and s2[j - 1] == s3[i + j - 1]
            dp[i][j] = from_s1 or from_s2

    return dp[m][n]
