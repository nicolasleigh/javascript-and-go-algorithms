"""
Explanation:

bitSet is an array of size 128 to track the characters that are currently in the window. We use the ord() function to get the ASCII value of each character.

We use the sliding window approach with two pointers, l (left) and r (right). The window contains unique characters, and we expand it by moving r.

If a character is already in the window (checked via bitSet), we increment the left pointer l and shrink the window until the character is no longer in it.

We update the result res whenever we find a longer substring by calculating the difference between r and l.
"""

def lengthOfLongestSubstring(s: str) -> int:
    if not s:
        return 0

    bitSet = [False] * 128  # ASCII length (2^7 = 128)
    res = 0
    l, r = 0, 0

    while l < len(s):
        # If bitSet is True, it means this character is already in the window
        if bitSet[ord(s[r])]:
            bitSet[ord(s[l])] = False
            l += 1
        else:
            bitSet[ord(s[r])] = True
            r += 1
            res = max(res, r - l)  # Calculate the maximum length of the substring

        # Avoid index out of range error
        if r >= len(s):
            break

    return res
