package main

import (
	"fmt"
	"math"
)

func maxSubArray(nums []int) int {
	result := math.MinInt64
	count := 0

	for _, num := range nums {
		count += num
		if count > result {
			result = count
		}
		if count < 0 {
			count = 0
		}
	}

	return int(result)
}

func maxSubArray1(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	// dp[i] store the maximum sum of subArrays ending at index i.
	dp := make([]int, len(nums))
	dp[0] = nums[0]
	maxSum := dp[0]

	for i := 1; i < len(nums); i++ {
		dp[i] = max(dp[i-1]+nums[i], nums[i])
		maxSum = max(maxSum, dp[i])
	}

	return maxSum
}

func main() {
	nums := []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
	fmt.Println(maxSubArray(nums)) // Output: 6
}
