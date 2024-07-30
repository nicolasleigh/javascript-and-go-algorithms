// https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/445769/merge-sort-clear-simple-explanation-with-examples-o-n-lg-n/

package main

import (
	"fmt"
)

type ValWithOrigIdx struct {
	val         int
	originalIdx int
}

func countSmaller(nums []int) []int {
	if len(nums) == 0 {
		return []int{}
	}
	n := len(nums)
	result := make([]int, n)

	newNums := make([]ValWithOrigIdx, n)
	for i := 0; i < n; i++ {
		newNums[i] = ValWithOrigIdx{val: nums[i], originalIdx: i}
	}

	mergeSortAndCount(newNums, 0, n-1, result)

	return result
}

func mergeSortAndCount(nums []ValWithOrigIdx, start, end int, result []int) {
	if start >= end {
		return
	}

	mid := (start + end) / 2
	mergeSortAndCount(nums, start, mid, result)
	mergeSortAndCount(nums, mid+1, end, result)

	leftPos := start
	rightPos := mid + 1
	merged := make([]ValWithOrigIdx, 0)
	// The number of elements that in the right array less than the left array
	count := 0

	for leftPos <= mid && rightPos <= end {
		if nums[leftPos].val > nums[rightPos].val {
			count++
			merged = append(merged, nums[rightPos])
			rightPos++
		} else {
			result[nums[leftPos].originalIdx] += count
			merged = append(merged, nums[leftPos])
			leftPos++
		}
	}

	for leftPos <= mid {
		result[nums[leftPos].originalIdx] += count
		merged = append(merged, nums[leftPos])
		leftPos++
	}

	for rightPos <= end {
		merged = append(merged, nums[rightPos])
		rightPos++
	}

	// Change the original nums array
	copy(nums[start:end+1], merged)
}

func main() {
	nums := []int{5, 2, 6, 1}
	result := countSmaller(nums)
	fmt.Println(result) // Output: [2, 1, 1, 0]
}
