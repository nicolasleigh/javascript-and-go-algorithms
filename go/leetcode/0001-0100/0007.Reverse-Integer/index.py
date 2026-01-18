"""
Explanation:
sign is used to track whether the input integer is negative.
abs(x) is used to work with the absolute value of x to simplify the reversal.
The loop extracts the last digit of x using x % 10, adds it to the tmp variable, and then removes the last digit from x using integer division (x //= 10).
After reversing the digits, the code checks whether the reversed integer is within the valid 32-bit integer range. If it exceeds the range, it returns 0.
If the original number was negative, the result is negated.
"""

# 7. Reverse Integer
class Solution:
    def reverse(self, x: int) -> int:
        tmp = 0
        sign = x < 0
        x = abs(x)

        while x:
            tmp = tmp * 10 + (x % 10)
            x //= 10  # Integer division to remove the last digit

        if tmp > 2**31 - 1 or tmp < -2**31:
            return 0

        return -tmp if sign else tmp
