"""
Key Points:
Sort first to enable two-pointer scanning.
Fix one number (nums[i]) and search for two others using left and right.
Skip duplicates at all three positions (i, left, right) to avoid repeated triplets.
Early break when nums[i] > 0 improves performance.
Time complexity: O(n²)
Space complexity: O(1) (excluding output)
"""

# 15. 3Sum
def threeSum(nums: list[int]) -> list[list[int]]:
    result = []
    n = len(nums)
    if n < 3:
        return result

    nums.sort()

    for i in range(n - 2):
        # Skip duplicates for i
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        # If current number is greater than 0, no valid triplet exists
        if nums[i] > 0:
            break

        left = i + 1
        right = n - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if total == 0:
                result.append([nums[i], nums[left], nums[right]])

                # Skip duplicates for left and right
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                left += 1
                right -= 1

            elif total < 0:
                left += 1
            else:
                right -= 1

    return result
