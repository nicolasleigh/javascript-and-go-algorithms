package main

import (
	"fmt"
)

// numberOfArithmeticSlices calculates the number of arithmetic slices in the given slice
// O(n^2)
func numberOfArithmeticSlices1(nums []int) int {
	n, count := len(nums), 0
	if n < 3 {
		return 0
	}

	for i := 1; i < n-1; i++ {
		diff := nums[i] - nums[i-1]
		for j := i + 1; j < n; j++ {
			if nums[j]-nums[j-1] == diff {
				count++
			} else {
				break
			}
		}
	}

	return count
}

// O(n)
func numberOfArithmeticSlices(nums []int) int {
	n, count, res := len(nums), 0, 0
	if n < 3 {
		return 0
	}

	prevDiff := nums[1] - nums[0]

	for i := 1; i < n-1; i++ {
		// Current difference
		diff := nums[i+1] - nums[i]

		if diff == prevDiff {
			count++
		} else {
			prevDiff = diff
			count = 0
		}

		// Add the number of valid arithmetic sequences found
		res += count
	}

	return res
}

func main() {
	nums := []int{1, 2, 3, 4, 5}                // Example usage
	fmt.Println(numberOfArithmeticSlices(nums)) // Output: 6
}
