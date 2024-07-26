package main

import (
	"fmt"
	"math/rand"
)

// Quick select algorithm
func findKthLargest(nums []int, k int) int {
	left, right := 0, len(nums)-1

	for {
		pivotIndex := left + rand.Intn(right-left+1)
		newPivotIndex := partition(nums, left, right, pivotIndex)
		if newPivotIndex == len(nums)-k {
			return nums[newPivotIndex]
		} else if newPivotIndex > len(nums)-k {
			right = newPivotIndex - 1
		} else {
			left = newPivotIndex + 1
		}
	}
}

func partition(nums []int, left, right, pivotIndex int) int {
	pivot := nums[pivotIndex]
	nums[pivotIndex], nums[right] = nums[right], nums[pivotIndex]
	storeIndex := left

	for i := left; i < right; i++ {
		if nums[i] < pivot {
			nums[i], nums[storeIndex] = nums[storeIndex], nums[i]
			storeIndex++
		}
	}
	nums[storeIndex], nums[right] = nums[right], nums[storeIndex]
	return storeIndex
}

func main() {
	nums := []int{3, 2, 1, 5, 6, 4}
	k := 2
	fmt.Println(findKthLargest(nums, k)) // Output: 5

	nums = []int{3, 2, 3, 1, 2, 4, 5, 5, 6}
	k = 4
	fmt.Println(findKthLargest(nums, k)) // Output: 4
}
