package main

import (
	"fmt"
	"math"
)

// minSubArrayLen function finds the minimal length of a contiguous subarray of which the sum is at least target
func minSubArrayLen(target int, nums []int) int {
	l, r, sum, minLen := 0, 0, 0, math.MaxInt32

	for r < len(nums) {
		sum += nums[r]
		for sum >= target {
			minLen = min(minLen, r-l+1)
			sum -= nums[l]
			l++
		}
		r++
	}

	// Meaning no subarray found.
	if minLen == math.MaxInt32 {
		return 0
	}
	return minLen
}

func main() {
	target := 7
	nums := []int{2, 3, 1, 2, 4, 3}
	fmt.Println(minSubArrayLen(target, nums)) // Output: 2

	target = 4
	nums = []int{1, 4, 4}
	fmt.Println(minSubArrayLen(target, nums)) // Output: 1

	target = 11
	nums = []int{1, 1, 1, 1, 1, 1, 1, 1}
	fmt.Println(minSubArrayLen(target, nums)) // Output: 0
}
