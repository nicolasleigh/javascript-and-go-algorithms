package main

import (
	"fmt"
)

func rob(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	res1 := robRange(nums, 0, len(nums)-2)
	res2 := robRange(nums, 1, len(nums)-1)
	return max(res1, res2)
}

func robRange(nums []int, start, end int) int {
	if start == end {
		return nums[start]
	}

	dp := make([]int, len(nums))
	dp[start] = nums[start]
	dp[start+1] = max(nums[start], nums[start+1])

	for i := start + 2; i <= end; i++ {
		dp[i] = max(dp[i-1], dp[i-2]+nums[i]) // Not rob nums[i] versus rob nums[i]
	}

	return dp[end]
}

func main() {
	nums := []int{2, 3, 2}
	fmt.Println(rob(nums)) // Output: 3

	nums = []int{1, 2, 3, 1}
	fmt.Println(rob(nums)) // Output: 4
}
