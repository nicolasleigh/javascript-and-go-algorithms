"""
Key Points:
Sorts the array so the shortest string is checked first.
Builds the prefix character by character.
Uses startswith() to verify the prefix across all strings.
Returns immediately when a mismatch is found.
Time complexity: O(n · m)
n = number of strings
m = length of the shortest string
"""
# 14. Longest Common Prefix
def longestCommonPrefix(strs: list[str]) -> str:
    if not strs:
        return ""

    # Make sure strs[0] is the shortest string
    strs.sort(key=len)

    prefix = ""

    for i in range(len(strs[0])):
        prefix = strs[0][:i + 1]
        for j in range(1, len(strs)):
            if not strs[j].startswith(prefix):
                return prefix[:-1]  # Remove last character

    return prefix
