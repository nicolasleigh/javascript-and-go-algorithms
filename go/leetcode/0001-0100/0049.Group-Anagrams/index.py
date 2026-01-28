"""
Explanation:

Dictionary of Lists (defaultdict):

    We use defaultdict(list) from the collections module to create a dictionary where each key maps to a list. If a key does not exist, it will automatically create an empty list, simplifying the process of appending strings.

Sorting the Strings:

    For each string in the input list strs, we sort the characters and join them back together to form a sorted string (this will serve as the key).

    Strings that are anagrams will result in the same sorted string, so they will be grouped together under the same key.

Group Strings by Sorted Key:

    For each string, after sorting and obtaining the key, we append the original string to the corresponding list in the dictionary.

Return the Result:

    Finally, we return the values of the dictionary (the lists of anagram groups) as a list using list(record.values()).
"""

from collections import defaultdict

def groupAnagrams(strs):
    record = defaultdict(list)

    for str in strs:
        # Sort the string to use as a key
        sorted_str = ''.join(sorted(str))
        record[sorted_str].append(str)

    # Return the grouped anagrams as a list of values
    return list(record.values())
