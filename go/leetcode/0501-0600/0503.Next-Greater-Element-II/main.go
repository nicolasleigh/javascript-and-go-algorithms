package main

import "fmt"

// nextGreaterElements finds the next greater element for each element in a circular array
func nextGreaterElements(nums []int) []int {
	size := len(nums)
	res := make([]int, size)
	// Initialize to -1
	for i := range res {
		res[i] = -1
	}

	s := []int{} // Stack

	for i := 0; i < size*2; i++ {
		cur := i % size // Current index
		for len(s) > 0 && nums[cur] > nums[s[len(s)-1]] {
			idx := s[len(s)-1]
			s = s[:len(s)-1] // Pop the stack
			res[idx] = nums[cur]
		}
		s = append(s, cur) // Push to stack
	}

	return res
}

func main() {
	nums := []int{1, 2, 4, 3}
	result := nextGreaterElements(nums)
	fmt.Println("Next greater elements:", result) // Output: [2 4 -1 4]
}
