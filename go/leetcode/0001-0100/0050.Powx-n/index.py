def myPow(x, n):
    # Base case: if n is 0, return 1
    if n == 0:
        return 1
    # If n is negative, we calculate the reciprocal of x and use positive n
    if n < 0:
        x = 1 / x
        n = -n

    # Recursive case: divide the exponent n into smaller subproblems
    half = myPow(x, n // 2)

    if n % 2 == 0:
        return half * half
    else:
        return half * half * x
