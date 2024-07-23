package main

import "fmt"

func findPeakElement(nums []int) int {
	n := len(nums)
	if n == 1 {
		return 0
	}

	if nums[0] > nums[1] {
		return 0
	}
	if nums[n-1] > nums[n-2] {
		return n - 1
	}

	low, high := 1, n-2
	for low <= high {
		mid := low + (high-low)/2
		if nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1] {
			return mid
		} else if nums[mid] < nums[mid-1] {
			// The left range must have a peak
			high = mid - 1
		} else if nums[mid] < nums[mid+1] {
			// The right range must have a peak
			low = mid + 1
		}
	}
	return -1
}

func main() {
	nums := []int{5, 2, 3, 1}
	fmt.Println(findPeakElement(nums)) // Output: 2
}
