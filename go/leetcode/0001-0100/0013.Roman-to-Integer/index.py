"""
Key Points:
Iterates from right to left, which simplifies handling subtractive pairs like "IV" and "IX".
If the current value is less than the previous value, subtract it; otherwise, add it.
Time complexity: O(n)
Space complexity: O(1)
"""

# 13. Roman to Integer
def romanToInt(s: str) -> int:
    if not s:
        return 0

    roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    total = 0
    last_num = 0

    for i in range(len(s) - 1, -1, -1):
        num = roman[s[i]]

        if num < last_num:
            total -= num
        else:
            total += num

        last_num = num

    return total
