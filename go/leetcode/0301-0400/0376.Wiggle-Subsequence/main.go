package main

import "fmt"

func wiggleMaxLength(nums []int) int {
	count, preDiff, curDiff := 1, 0, 0

	for i := 0; i < len(nums)-1; i++ {
		curDiff = nums[i+1] - nums[i]
		if (curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0) {
			count++
			preDiff = curDiff
		}
	}

	return count
}

func main() {
	fmt.Println(wiggleMaxLength([]int{1, 7, 4, 9, 2, 5})) // Output: 6
	fmt.Println(wiggleMaxLength([]int{1, 4, 7, 2, 5}))    // Output: 4
	fmt.Println(wiggleMaxLength([]int{1, 2, 3, 4, 5}))    // Output: 2
}
