package main

import (
	"fmt"
)

// In Binary Search algorithm:
// If arr[low] <= arr[mid]: In this case, we identified that the left half is sorted.
// If arr[mid] <= arr[high]: In this case, we identified that the right half is sorted.
func findMin1(nums []int) int {
	left, right := 0, len(nums)-1

	for left < right {
		mid := left + (right-left)/2

		if nums[mid] < nums[right] {
			// Meaning the right range is sorted, and the target value (aka min value) exists in the left range.
			right = mid
		} else {
			// Meaning the right range is not sorted, and the target value exists in the right range.
			left = mid + 1
		}
	}
	return nums[left]
}

func findMin(nums []int) int {
	left, right := 0, len(nums)-1

	for left < right {
		mid := left + (right-left)/2

		if nums[left] > nums[mid] {
			// If we are here, it means that the range low to mid is unsorted, so we will discard the right part
			right = mid
		} else {
			// If we are here, it means the range low to mid is sorted, so the min element will be nums[low] or in the range mid to high
			if nums[mid] < nums[right] {
				// If we are here, it means the right part is also sorted. So now the left part is also sorted and right part is also sorted, So nums[low] will be the lowest
				return nums[left]
			} else {
				// If the right part is not sorted, so the min will lie in that range (the unsorted range)
				left = mid + 1
			}
		}
	}
	return nums[left]
}

func main() {
	nums := []int{3, 4, 5, 1, 2}
	fmt.Println(findMin(nums)) // Output: 1
}
