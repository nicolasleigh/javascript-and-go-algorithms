package main

import "fmt"

// maxProduct finds the maximum product of a subarray
func maxProduct(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	// iMax/iMin stores the max/min product of subarray that ends with the current number nums[i]
	iMax, iMin, res := nums[0], nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		// multiplied by a negative makes big number smaller, small number bigger
		if nums[i] < 0 {
			iMax, iMin = iMin, iMax
		}
		// max/min product for the current number is either the current number itself
		// or the max/min by the previous number times the current one
		iMax = max(nums[i], iMax*nums[i])
		iMin = min(nums[i], iMin*nums[i])

		// the newly computed max value is a candidate for our global result
		res = max(res, iMax)
	}
	return res
}

func main() {
	nums := []int{2, 3, -2, 4}
	fmt.Println("Maximum product of subarray:", maxProduct(nums)) // Output: 6

	nums = []int{-2, 0, -1}
	fmt.Println("Maximum product of subarray:", maxProduct(nums)) // Output: 0

	nums = []int{-2, 3, -4}
	fmt.Println("Maximum product of subarray:", maxProduct(nums)) // Output: 24
}
