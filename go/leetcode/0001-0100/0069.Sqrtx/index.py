# 69. Sqrt(x)
def mySqrt(x: int) -> int:
    low, high = 0, x
    ans = 0  # stores the last valid mid

    while low <= high:
        mid = low + (high - low) // 2

        if mid <= x // mid:   # mid * mid <= x (overflow-safe)
            ans = mid         # mid is a valid candidate
            low = mid + 1     # try to find a bigger one
        else:
            high = mid - 1    # mid is too large

    return ans
