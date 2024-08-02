// https://leetcode.com/problems/wiggle-sort-ii/solutions/77682/step-by-step-explanation-of-index-mapping-in-java/

package main

import (
	"fmt"
	"math/rand"
)

// Same as 0215
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

// Helper function to rewire indices
// Accessing newIndex(0,10) actually accesses nums[1].
// Accessing newIndex(1,10) actually accesses nums[3].
// Accessing newIndex(2,10) actually accesses nums[5].
// Accessing newIndex(3,10) actually accesses nums[7].
// Accessing newIndex(4,10) actually accesses nums[9].
// Accessing newIndex(5,10) actually accesses nums[0].
// Accessing newIndex(6,10) actually accesses nums[2].
// Accessing newIndex(7,10) actually accesses nums[4].
// Accessing newIndex(8,10) actually accesses nums[6].
// Accessing newIndex(9,10) actually accesses nums[8].
func newIndex(index, n int) int {
	// When n is odd, it becomes (1+2*index)%n
	// When n is even, it becomes (1+2*index)%(n+1)
	return (1 + 2*index) % (n | 1)
}

// Function to swap elements in the array
func swap(nums []int, i, j int) {
	nums[i], nums[j] = nums[j], nums[i]
}

// Main function to perform wiggle sort
// 1) elements smaller than the 'median' are put into the last even slots
// 2) elements larger than the 'median' are put into the first odd slots
// 3) the medians are put into the remaining slots.
func wiggleSort(nums []int) {
	n := len(nums)
	median := findKthLargest(nums, (n+1)/2)

	left, i, right := 0, 0, n-1

	for i <= right {
		if nums[newIndex(i, n)] > median {
			swap(nums, newIndex(left, n), newIndex(i, n)) // Put in odd slots
			left++
			i++
		} else if nums[newIndex(i, n)] < median {
			swap(nums, newIndex(right, n), newIndex(i, n)) // Put in even slots
			right--
		} else {
			i++
		}
	}
}

func main() {
	nums := []int{1, 5, 1, 1, 6, 4}
	wiggleSort(nums)
	fmt.Println(nums) // Output: [1 6 1 5 1 4]
}
