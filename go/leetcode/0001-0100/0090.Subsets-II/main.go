package main

import (
	"fmt"
	"sort"
)

// Similar to 0078
func subsetsWithDup(nums []int) [][]int {
	var res [][]int
	var comb []int
	sort.Ints(nums) // Sort the input array

	backtrack(comb, nums, &res, 0)
	return res
}

func backtrack(comb, nums []int, res *[][]int, start int) {
	// Add the current combination to the result
	c := make([]int, len(comb))
	copy(c, comb)
	*res = append(*res, c)

	// Explore all subsets that start with `start`
	for i := start; i < len(nums); i++ {
		// Skip duplicates
		if i > start && nums[i] == nums[i-1] {
			continue
		}
		comb = append(comb, nums[i])
		backtrack(comb, nums, res, i+1)
		comb = comb[:len(comb)-1]
	}
}

func main() {
	nums := []int{1, 2, 2}
	fmt.Println("Subsets with duplicates:", subsetsWithDup(nums))
}
