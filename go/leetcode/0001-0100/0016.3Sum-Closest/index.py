"""
Key Points:
Sorts the array to enable the two-pointer technique.
Tracks the minimum absolute difference from target.
Updates closest_sum whenever a closer sum is found.
Early exit when an exact match is found.
Time complexity: O(n²)
Space complexity: O(1) (excluding input sort)
"""

# 16. 3Sum Closest
def threeSumClosest(nums: list[int], target: int) -> int:
    n = len(nums)
    if n < 3:
        return 0

    nums.sort()

    closest_sum = 0
    min_diff = float('inf')

    for i in range(n - 2):
        # Optional duplicate skip (not required for closest sum)
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left = i + 1
        right = n - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]
            diff = abs(total - target)

            if diff < min_diff:
                min_diff = diff
                closest_sum = total

            if total == target:
                return total  # Exact match
            elif total < target:
                left += 1
            else:
                right -= 1

    return closest_sum
