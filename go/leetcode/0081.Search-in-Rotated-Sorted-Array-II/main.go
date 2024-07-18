package main

import "fmt"

// Similar to 0033
func search(nums []int, target int) bool {
	nums = removeDuplicate(nums) // New
	low, high := 0, len(nums)-1

	for low <= high {
		mid := low + (high-low)>>1

		if nums[mid] == target {
			return true // Change from mid to true
		}

		if nums[low] <= nums[mid] {
			if nums[low] <= target && target < nums[mid] {
				high = mid - 1
			} else {
				low = mid + 1
			}
		} else {
			if nums[mid] < target && target <= nums[high] {
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
	}

	return false // Change from -1 to false
}

// Helper function
func removeDuplicate(nums []int) []int {
	exist := make(map[int]bool)
	list := []int{}
	for _, v := range nums {
		if _, ok := exist[v]; !ok {
			exist[v] = true
			list = append(list, v)
		}
	}
	return list
}

func main() {
	// fmt.Println(search([]int{4, 5, 6, 7, 0, 1, 2, 3}, 6))
	fmt.Println(search([]int{1, 0, 1, 1, 1}, 0))
}
