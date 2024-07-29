package main

import "fmt"

func moveZeroes1(nums []int) {
	for i := 0; i < len(nums)-1; i++ {
		for j := 0; j < len(nums)-1; j++ {
			if nums[j] == 0 {
				nums[j], nums[j+1] = nums[j+1], nums[j]
			}
		}
	}
}

// Two pointers -- when right point to a non-zero value, swap values and move two pointers forward.
func moveZeroes(nums []int) {
	left := 0

	for right := 0; right < len(nums); right++ {
		if nums[right] != 0 {
			nums[left], nums[right] = nums[right], nums[left]
			left++
		}
	}
}

func main() {
	nums := []int{0, 1, 0, 3, 12}
	moveZeroes(nums)
	fmt.Println(nums) // Output: [1, 3, 12, 0, 0]
}
