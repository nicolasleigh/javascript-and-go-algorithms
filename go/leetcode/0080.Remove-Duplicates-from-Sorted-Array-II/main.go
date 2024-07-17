package main

import "fmt"

func removeDuplicates(nums []int) int {
	slow := 0

	for fast := 0; fast < len(nums); fast++ {
		if slow == 0 || slow == 1 || nums[slow-2] != nums[fast] {
			nums[slow] = nums[fast]
			slow++
		}
	}

	return slow
}

func main() {
	fmt.Println(removeDuplicates([]int{1, 1, 1, 2, 2, 3}))
}
