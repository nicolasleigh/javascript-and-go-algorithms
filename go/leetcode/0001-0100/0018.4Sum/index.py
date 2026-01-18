"""
Key Points:
Sorts the array to enable efficient duplicate skipping.
Uses two nested loops (i, j) plus two pointers (left, right).
Carefully skips duplicates at all four positions to avoid repeated quadruplets.
Time complexity: O(n³)
Space complexity: O(1) (excluding the result list)
"""

#  18. 4Sum
def fourSum(nums: list[int], target: int) -> list[list[int]]:
    result = []
    n = len(nums)
    if n < 4:
        return result

    nums.sort()

    for i in range(n - 3):
        # Skip duplicates for i
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        for j in range(i + 1, n - 2):
            # Skip duplicates for j
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue

            left = j + 1
            right = n - 1

            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]

                if total == target:
                    result.append([nums[i], nums[j], nums[left], nums[right]])

                    # Skip duplicates for left and right
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1

                elif total < target:
                    left += 1
                else:
                    right -= 1

    return result
