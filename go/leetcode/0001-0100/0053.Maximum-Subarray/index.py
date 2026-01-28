"""
Explanation:

We use dynamic programming (DP) to calculate the maximum sum subarray that ends at each index i. The value of dp[i] is the maximum sum we can get by either:

Continuing from the previous subarray (dp[i-1] + nums[i]).

Starting a new subarray at index i (nums[i]).

Finally, we return the maximum value from the dp array.
"""
def maxSubArray(nums):
    # Initialize dp array where dp[i] stores the maximum sum of subarrays ending at index i
    dp = [0] * len(nums)
    dp[0] = nums[0]

    for i in range(1, len(nums)):
        dp[i] = max(dp[i - 1] + nums[i], nums[i])

    return max(dp)


"""
Explanation:

This solution uses a greedy approach to track the sum of the current subarray (count). If count becomes negative, we reset it to 0 because any negative sum will reduce the sum of future subarrays.

We keep track of the maximum value of count in result.
"""
def maxSubArray(nums):
    result = float('-inf')
    count = 0

    for num in nums:
        count += num
        result = max(result, count)
        if count < 0:
            count = 0

    return result
