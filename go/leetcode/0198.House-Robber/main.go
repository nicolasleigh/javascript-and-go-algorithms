package main

import (
	"fmt"
)

func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	if len(nums) == 1 {
		return nums[0]
	}

	// dp[i] represents the largest value can be robbed from nums[0] to nums[i]
	dp := make([]int, len(nums))
	dp[0], dp[1] = nums[0], max(nums[0], nums[1])

	for i := 2; i < len(nums); i++ {
		dp[i] = max(dp[i-1], dp[i-2]+nums[i]) // Represent not rob nums[i] versus rob nums[i] 
	}

	return dp[len(nums)-1]
}

func main() {
	nums := []int{1, 2, 3, 1}
	fmt.Println(rob(nums)) // Output: 4
}
