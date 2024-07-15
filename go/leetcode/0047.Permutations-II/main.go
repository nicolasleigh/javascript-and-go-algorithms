package main

import (
	"fmt"
	"sort"
)

func permuteUnique(nums []int) [][]int {
	var res [][]int
	var comb []int
	usedArr := make([]bool, len(nums))

	// Sort nums slice
	sort.Ints(nums)

	backtrack(nums, comb, &res, usedArr)
	return res
}

func backtrack(nums, comb []int, res *[][]int, usedArr []bool) {
	if len(comb) == len(nums) {
		// Make a copy of comb and append to res
		temp := make([]int, len(comb))
		copy(temp, comb)
		*res = append(*res, temp)
		return
	}

	for i := 0; i < len(nums); i++ {
		if usedArr[i] || (i > 0 && nums[i] == nums[i-1] && usedArr[i-1]) {
			continue
		}
		usedArr[i] = true
		comb = append(comb, nums[i])
		backtrack(nums, comb, res, usedArr)
		comb = comb[:len(comb)-1] // Pop last element
		usedArr[i] = false
	}
}

func main() {
	nums := []int{1, 1, 2}
	result := permuteUnique(nums)
	fmt.Println(result) // Output: [[1 1 2] [1 2 1] [2 1 1]]
}
