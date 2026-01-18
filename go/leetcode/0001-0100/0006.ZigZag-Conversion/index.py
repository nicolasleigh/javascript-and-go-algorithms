"""
Explanation:

convert: This function takes the string s and the number of rows numRows. If numRows is 1, it returns the string as is since there’s no zigzag pattern possible.

matrix: An array of lists is used to store characters in their respective rows.

The down and up variables control the movement of the "zigzag" pattern, alternating between moving down and up through the rows.

When the zigzag reaches the bottom (after numRows - 1), it switches to moving upwards, and once it reaches the top, it switches back down, continuing this pattern.

The final step concatenates all rows and returns the zigzagged string.
"""

# 6. ZigZag Conversion
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s  # Special case where numRows is 1

        matrix = [[] for _ in range(numRows)]
        down = 0
        up = numRows - 2
        i = 0

        while i < len(s):
            if down < numRows:
                matrix[down].append(s[i])
                down += 1
                i += 1
            elif up > 0:
                matrix[up].append(s[i])
                up -= 1
                i += 1
            else:
                up = numRows - 2
                down = 0

        solution = ""
        for row in matrix:
            solution += ''.join(row)

        return solution