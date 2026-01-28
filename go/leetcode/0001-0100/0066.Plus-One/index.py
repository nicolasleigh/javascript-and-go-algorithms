# 66. Plus One
def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        digits[i] += 1
        if digits[i] != 10:
            # No carry needed
            return digits
        # Carry over
        digits[i] = 0

    # All digits were 9 (e.g., 999 → 1000)
    digits.insert(0, 1)
    return digits
