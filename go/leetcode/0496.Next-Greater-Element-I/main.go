package main

import "fmt"

// nextGreaterElement finds the next greater element for each element in nums1 based on nums2
func nextGreaterElement(nums1 []int, nums2 []int) []int {
	// Create a map to store the next greater element for each number
	mapNextGreater := make(map[int]int)
	stack := []int{}

	// Process nums2 to fill the map with next greater elements
	for _, num := range nums2 {
		for len(stack) > 0 && num > stack[len(stack)-1] {
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1] // Pop the stack
			mapNextGreater[top] = num
		}
		stack = append(stack, num)
	}

	// Create the result for nums1 based on the map
	res := make([]int, len(nums1))
	for i, num := range nums1 {
		if v, found := mapNextGreater[num]; found {
			res[i] = v
		} else {
			res[i] = -1
		}
	}

	return res
}

func main() {
	nums1 := []int{4, 1, 2}
	nums2 := []int{1, 3, 4, 2}
	result := nextGreaterElement(nums1, nums2)
	fmt.Println("Next greater elements:", result) // Next greater elements: [-1 3 -1]
}
