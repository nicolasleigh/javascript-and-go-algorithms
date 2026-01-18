"""
Key Points:
Uses ord() to convert characters to digits (Python equivalent of charCodeAt)
Explicitly handles:
    leading spaces
    optional sign
    digit parsing
    32-bit signed integer overflow/underflow
Stops parsing as soon as a non-digit character is encountered
"""

# 8. String to Integer (atoi)
def myAtoi(s: str) -> int:
    i = 0
    n = len(s)
    sign = 1
    result = 0

    # 1. Skip leading whitespaces
    while i < n and s[i] == " ":
        i += 1

    # 2. Check for optional '+' or '-' sign
    if i < n and (s[i] == "+" or s[i] == "-"):
        sign = -1 if s[i] == "-" else 1
        i += 1

    # 3. Process numerical digits
    while i < n and '0' <= s[i] <= '9':
        digit = ord(s[i]) - ord('0')
        result = result * 10 + digit
        i += 1

        # 4. Overflow / underflow check
        if sign == 1 and result > 2**31 - 1:
            return 2**31 - 1
        if sign == -1 and result > 2**31:
            return -2**31

    return sign * result
