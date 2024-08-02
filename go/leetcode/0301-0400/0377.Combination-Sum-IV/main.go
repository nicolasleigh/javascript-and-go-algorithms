package main

import "fmt"

func combinationSum4(nums []int, target int) int {
	// Initialize the dp array with all elements set to 0
	dp := make([]int, target+1)
	dp[0] = 1

	for i := 1; i <= target; i++ {
		for _, num := range nums {
			if num <= i {
				dp[i] += dp[i-num]
			}
		}
	}

	return dp[target]
}

func main() {
	nums := []int{1, 2, 3}
	target := 4
	fmt.Println(combinationSum4(nums, target)) // Output: 7

	nums = []int{9}
	target = 3
	fmt.Println(combinationSum4(nums, target)) // Output: 0
}
