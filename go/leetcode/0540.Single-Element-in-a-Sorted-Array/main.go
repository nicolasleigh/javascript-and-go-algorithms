package main

import "fmt"

// singleNonDuplicate finds the single non-duplicate element in a sorted array.
func singleNonDuplicate(nums []int) int {
	left, right := 0, len(nums)-1
	for left < right {
		mid := left + (right-left)/2
		if mid%2 == 1 {
			mid--
		}
		if nums[mid] != nums[mid+1] {
			right = mid
		} else {
			left = mid + 2
		}
	}
	return nums[left]
}

func main() {
	nums := []int{1, 1, 2, 3, 3, 4, 4, 8, 8}
	fmt.Println(singleNonDuplicate(nums)) // Output: 2
}

// https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212178/day-52-binary-search-easiest-beginner-friendly-sol/