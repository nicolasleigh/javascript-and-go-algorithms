"""
Key Points:
Uses backtracking (DFS) to build combinations character by character.
comb acts as the current path (like a stack).
When the length of comb equals the number of digits, a valid combination is formed.
Time complexity: O(4ⁿ) in the worst case (digits like 7 or 9).
Space complexity: O(n) for recursion depth (excluding output).
"""

# 17. Letter Combinations of a Phone Number
def letterCombinations(digits: str) -> list[str]:
    if not digits:
        return []

    mapping = ["", "", "abc", "def", "ghi",
               "jkl", "mno", "pqrs", "tuv", "wxyz"]

    res = []
    comb = []
    k = len(digits)

    def backtrack(n: int):
        if n == k:
            res.append("".join(comb))
            return

        letters = mapping[int(digits[n])]
        for ch in letters:
            comb.append(ch)
            backtrack(n + 1)
            comb.pop()

    backtrack(0)
    return res
