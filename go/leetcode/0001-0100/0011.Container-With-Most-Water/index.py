"""
Key Points:
Uses two pointers (start, end) to scan from both ends.
The area is determined by:

    width = end - start
    height = min(height[start], height[end])

The pointer at the shorter line is moved inward, since it’s the limiting factor.
Time complexity: O(n)
Space complexity: O(1)
"""

# 11. Container With Most Water
def maxArea(height: list[int]) -> int:
    max_area = 0
    start = 0
    end = len(height) - 1

    while start < end:
        width = end - start

        if height[start] < height[end]:
            high = height[start]
            start += 1
        else:
            high = height[end]
            end -= 1

        area = width * high
        if area > max_area:
            max_area = area

    return max_area
