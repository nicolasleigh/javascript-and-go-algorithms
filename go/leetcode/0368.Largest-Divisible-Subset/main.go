package main

import (
	"fmt"
	"slices"
	"sort"
)

func largestDivisibleSubset(nums []int) []int {
	sort.Ints(nums) // Sort the array

	n := len(nums)
	dp := make([]int, n)        // DP array to store the size of the largest subset ending at each index
	prevIndex := make([]int, n) // Array to store the previous index in the subset
	// Initialize dp and prevIndex array
	for i := range dp {
		dp[i] = 1
		prevIndex[i] = -1
	}

	maxIndex, maxSize := 0, 1

	// Build the DP table
	for i := 1; i < n; i++ {
		for j := 0; j < i; j++ {
			if nums[i]%nums[j] == 0 && dp[i] < dp[j]+1 {
				dp[i] = dp[j] + 1
				prevIndex[i] = j
			}
		}
		if dp[i] > maxSize {
			maxIndex, maxSize = i, dp[i]
		}
	}

	// Reconstruct the largest divisible subset
	res := []int{}
	for maxIndex != -1 {
		res = append(res, nums[maxIndex])
		maxIndex = prevIndex[maxIndex]
	}
	slices.Reverse(res) // Reverse result array
	return res
}

func main() {
	nums := []int{1, 2, 4, 8}
	fmt.Println(largestDivisibleSubset(nums)) // Output: [1 2 4 8]

	nums = []int{1, 2, 3}
	fmt.Println(largestDivisibleSubset(nums)) // Output: [1 2] or [1 3]
}
