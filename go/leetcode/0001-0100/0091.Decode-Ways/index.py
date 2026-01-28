def numDecodings(s: str) -> int:
    n = len(s)

    # dp[i] = number of ways to decode the first i characters
    dp = [0] * (n + 1)

    # base cases
    dp[0] = 1                          # empty string
    dp[1] = 1 if s[0] != '0' else 0    # first character

    for i in range(2, n + 1):
        # single digit (s[i-1])
        first = int(s[i - 1])

        # two digits (s[i-2:i])
        second = int(s[i - 2:i])

        if 1 <= first <= 9:
            dp[i] += dp[i - 1]

        if 10 <= second <= 26:
            dp[i] += dp[i - 2]

    return dp[n]
