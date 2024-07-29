package main

import (
	"fmt"
	"slices"
)

func lengthOfLIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	// dp[i] means the length of the longest increasing subsequence ending with nums[i]
	dp := make([]int, len(nums))
	for i := range dp {
		dp[i] = 1
	}
	for i := 1; i < len(nums); i++ {
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}
	}
	return slices.Max(dp)
}

func main() {
	nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
	fmt.Println(lengthOfLIS(nums)) // Output: 4

	nums = []int{0, 1, 0, 3, 2, 3}
	fmt.Println(lengthOfLIS(nums)) // Output: 4

	nums = []int{7, 7, 7, 7, 7, 7, 7}
	fmt.Println(lengthOfLIS(nums)) // Output: 1
}
