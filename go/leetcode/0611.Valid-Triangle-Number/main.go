package main

import (
	"sort"
)

func triangleNumber(nums []int) int {
	sort.Ints(nums)
	n := len(nums)
	res := 0

	for k := 2; k < n; k++ {
		i := 0
		j := k - 1
		for i < j {
			if nums[i]+nums[j] > nums[k] {
				res += j - i
				j--
			} else {
				i++
			}
		}
	}
	
	return res
}

func main() {
	// Example usage
	nums := []int{2, 2, 3, 4}
	result := triangleNumber(nums)
	println(result) // Output: 3
}

// https://leetcode.com/problems/valid-triangle-number/solutions/1339340/c-java-python-two-pointers-picture-explain-clean-concise-o-n-2/