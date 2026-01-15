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
