package main

import (
	"fmt"
)

func findSubsequences(nums []int) [][]int {
	var res [][]int
	var comb []int
	backtrack(0, nums, comb, &res)
	return res
}

func backtrack(start int, nums, comb []int, res *[][]int) {
	if len(comb) > 1 {
		c := make([]int, len(comb))
		copy(c, comb)
		*res = append(*res, c)
	}

	usedSet := make(map[int]bool)
	for i := start; i < len(nums); i++ {
		if usedSet[nums[i]] || (len(comb) > 0 && nums[i] < comb[len(comb)-1]) {
			continue
		}

		usedSet[nums[i]] = true
		comb = append(comb, nums[i])
		backtrack(i+1, nums, comb, res)
		comb = comb[:len(comb)-1]
	}
}

func main() {
	nums := []int{4, 6, 7, 7}
	result := findSubsequences(nums)
	fmt.Println(result) // Output: [[4 6] [4 6 7] [4 6 7 7] [4 7] [4 7 7] [6 7] [6 7 7] [7 7]]
}
