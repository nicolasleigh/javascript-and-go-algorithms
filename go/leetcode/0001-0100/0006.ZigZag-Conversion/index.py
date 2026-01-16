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