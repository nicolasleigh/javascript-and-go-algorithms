package main

import "fmt"

func fourSumCount(nums1, nums2, nums3, nums4 []int) int {
	// Create a map to store sums of pairs from nums1 and nums2
	sumCount := make(map[int]int)
	count := 0

	// Calculate all possible sums of pairs from nums1 and nums2
	for _, n1 := range nums1 {
		for _, n2 := range nums2 {
			sum := n1 + n2
			sumCount[sum]++
		}
	}

	// For each pair in nums3 and nums4, check if the negative sum exists in the map
	for _, n3 := range nums3 {
		for _, n4 := range nums4 {
			sum := -(n3 + n4)
			count += sumCount[sum]
		}
	}

	return count
}

func main() {
	nums1 := []int{1, 2}
	nums2 := []int{-1, -2}
	nums3 := []int{-1, 2}
	nums4 := []int{0, 2}

	result := fourSumCount(nums1, nums2, nums3, nums4)
	fmt.Println(result) // Output: 2
}
