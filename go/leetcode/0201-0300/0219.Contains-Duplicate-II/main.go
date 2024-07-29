package main

import (
	"fmt"
)

func containsNearbyDuplicate(nums []int, k int) bool {
	numMap := make(map[int]int)
	for i, num := range nums {
		if v, ok := numMap[num]; ok {
			if i-v <= k {
				return true
			}
		}
		numMap[num] = i
	}
	return false
}

func main() {
	nums := []int{1, 2, 3, 1}
	k := 3
	fmt.Println(containsNearbyDuplicate(nums, k)) // Output: true

	nums = []int{1, 0, 1, 1}
	k = 1
	fmt.Println(containsNearbyDuplicate(nums, k)) // Output: true

	nums = []int{1, 2, 3, 1, 2, 3}
	k = 2
	fmt.Println(containsNearbyDuplicate(nums, k)) // Output: false
}
