package main

import (
	"fmt"
)

func subsets(nums []int) [][]int {
	var res [][]int
	var comb []int

	backtrack(comb, nums, &res, 0)
	return res
}

func backtrack(comb, nums []int, res *[][]int, start int) {
	// Add the current combination to the result
	c := make([]int, len(comb))
	copy(c, comb)
	*res = append(*res, c)
	// Explore all possible subsets that start with 'start'
	for i := start; i < len(nums); i++ {
		comb = append(comb, nums[i])
		backtrack(comb, nums, res, i+1)
		comb = comb[:len(comb)-1]
	}
}

func main() {
	nums := []int{1, 2, 3}
	result := subsets(nums)
	fmt.Printf("Subsets of %v: %v\n", nums, result) // Subsets of [1 2 3]: [[] [1] [1 2] [1 2 3] [1 3] [2] [2 3] [3]]
}
