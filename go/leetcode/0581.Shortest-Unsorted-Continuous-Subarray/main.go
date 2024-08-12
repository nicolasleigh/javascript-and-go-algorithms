package main

import "fmt"

func findUnsortedSubarray(nums []int) int {
	if len(nums) < 2 {
		return 0
	}

	n := len(nums)
	prev := nums[0]
	start := n - 1
	end := 0

	// Find the largest index not in place
	for i := 0; i < n; i++ {
		if nums[i] < prev {
			end = i
		} else {
			prev = nums[i]
		}
	}

	prev = nums[start]

	// Find the smallest index not in place
	for i := n - 1; i >= 0; i-- {
		if prev < nums[i] {
			start = i
		} else {
			prev = nums[i]
		}
	}

	if end != 0 {
		return end - start + 1
	}
	return 0
}

func main() {
	// Example usage
	nums := []int{2, 6, 4, 8, 10, 9, 15}
	fmt.Println(findUnsortedSubarray(nums)) // Output: 5
}
