package main

import "fmt"

func merge(nums1 []int, m int, nums2 []int, n int) {
	i := m - 1     // Pointer for nums1
	j := n - 1     // Pointer for nums2
	k := m + n - 1 // Pointer for the merged array nums1

	// Traverse nums2 from the end to the beginning
	for j >= 0 {
		// If nums1 has elements left and nums1[i] > nums2[j]
		if i >= 0 && nums1[i] > nums2[j] {
			nums1[k] = nums1[i]
			k--
			i--
		} else {
			// Otherwise, copy nums2[j] into nums1[k]
			nums1[k] = nums2[j]
			k--
			j--
		}
	}
}

func main() {
	nums1 := []int{1, 2, 3, 0, 0, 0}
	m := 3
	nums2 := []int{2, 5, 6}
	n := 3

	fmt.Printf("Original nums1: %v\n", nums1)
	merge(nums1, m, nums2, n)
	fmt.Printf("Merged nums1: %v\n", nums1)
}
