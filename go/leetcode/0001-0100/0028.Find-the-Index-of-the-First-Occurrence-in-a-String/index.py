import re

"""
Explanation:

Using find():

This is the simplest approach. Python's str.find() returns the index of the first occurrence of a substring (needle) in the string (haystack), or -1 if not found.

Using Regular Expression:

re.search() is used to find the first match of the needle in the haystack. If a match is found, match.start() returns the index of the match. Otherwise, it returns -1.

Manual Sliding Window:

This solution manually checks substrings of the haystack of the same length as needle, comparing each substring to needle. If a match is found, the index is returned. If no match is found after the loop, -1 is returned.
"""

# solution 1
def strStr2(haystack, needle):
    match = re.search(needle, haystack)
    return match.start() if match else -1

# solution 2
def strStr(haystack, needle):
    return haystack.find(needle)

# solution 3
def strStr3(haystack, needle):
    haystackLength = len(haystack)
    needleLength = len(needle)

    if haystackLength < needleLength:
        return -1

    for i in range(haystackLength - needleLength + 1):
        if haystack[i:i + needleLength] == needle:
            return i
    return -1
