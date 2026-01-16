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
