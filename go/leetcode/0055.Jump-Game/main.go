package main

import "fmt"

func canJump(nums []int) bool {
	gas := 0

	for i := 0; i < len(nums); i++ {
		// First station don't consume gas
		if i > 0 {
			gas--
		}
		if nums[i] > gas {
			gas = nums[i]
		}
		// If gas is exhausted and this station is not the last station
		if gas <= 0 && i != len(nums)-1 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(canJump([]int{2, 3, 1, 1, 0}))
}
