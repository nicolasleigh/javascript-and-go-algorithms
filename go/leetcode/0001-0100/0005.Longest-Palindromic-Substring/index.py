"""
Explanation:

longestPalindrome iterates through each character in the string and checks for both odd and even-length palindromes using the maxPalindrome helper function.

maxPalindrome expands the window outwards from the center (using two pointers, left and right) while the characters at the current left and right pointers are equal.

For each potential palindrome, the function updates the result if the new substring is longer than the current longest palindrome found.
"""

#  5. Longest Palindromic Substring
class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""

        for i in range(len(s)):
            # If the length of the palindrome is odd
            res = maxPalindrome(s, i, i, res)
            # If the length of the palindrome is even
            res = maxPalindrome(s, i, i + 1, res)

        return res

def maxPalindrome(s: str, left: int, right: int, res: str) -> str:
    sub = ""

    while left >= 0 and right < len(s) and s[left] == s[right]:
        sub = s[left:right + 1]
        left -= 1
        right += 1

    if len(sub) > len(res):
        return sub

    return res
