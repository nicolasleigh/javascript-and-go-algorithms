package main

import "fmt"

func intersection(nums1 []int, nums2 []int) []int {
	nums1Set := make(map[int]struct{})
	resSet := make(map[int]struct{})
	var res []int

	// Add elements of nums1 to a set (map)
	for _, num := range nums1 {
		nums1Set[num] = struct{}{}
	}

	// Check if elements of nums2 are in nums1Set and add them to resSet
	for _, num := range nums2 {
		if _, found := nums1Set[num]; found {
			resSet[num] = struct{}{}
		}
	}

	// Convert resSet to a slice
	for num := range resSet {
		res = append(res, num)
	}

	return res
}

func main() {
	nums1 := []int{1, 2, 2, 1}
	nums2 := []int{2, 2}
	fmt.Println(intersection(nums1, nums2)) // Output: [2]
}
