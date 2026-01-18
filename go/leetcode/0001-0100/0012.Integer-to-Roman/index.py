"""
Key Points:
Uses a greedy algorithm: always subtract the largest possible Roman value.
values and symbols arrays are aligned by index.
Continues until num is reduced to 0.
Time complexity is O(1) because Roman numeral length is bounded.
"""

# 12. Integer to Roman
def intToRoman(num: int) -> str:
    values = [1000, 900, 500, 400, 100, 90, 50, 40,
              10, 9, 5, 4, 1]
    symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL",
               "X", "IX", "V", "IV", "I"]

    res = ""
    i = 0

    while num > 0:
        while values[i] > num:
            i += 1
        num -= values[i]
        res += symbols[i]

    return res
