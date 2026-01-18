"""
Notes:
Negative numbers are immediately rejected.
Single-digit numbers are always palindromes.
The number is converted to a string for easy symmetric comparison.
The loop checks characters from both ends moving toward the center.
"""
# 9. Palindrome Number 
def isPalindrome(x: int) -> bool:
    if x < 0:
        return False
    if x < 10:
        return True

    s = str(x)
    length = len(s)

    for i in range(length // 2 + 1):
        if s[i] != s[length - 1 - i]:
            return False

    return True
