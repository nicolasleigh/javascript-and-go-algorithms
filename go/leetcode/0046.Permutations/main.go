package main

import "fmt"

func permute(nums []int) [][]int {
	var res [][]int
	var comb []int
	// usedSet cannot be []bool, because nums value can be negative and negative index causes runtime error.
	usedSet := make(map[int]bool)

	backtrack(nums, comb, &res, usedSet)
	return res
}

func backtrack(nums, comb []int, res *[][]int, usedSet map[int]bool) {
	if len(comb) == len(nums) {
		// Make a copy of comb and append to res
		tmp := make([]int, len(comb))
		copy(tmp, comb)
		*res = append(*res, tmp)
		return
	}

	for _, num := range nums {
		if usedSet[num] {
			continue
		}
		usedSet[num] = true
		comb = append(comb, num)
		backtrack(nums, comb, res, usedSet)
		comb = comb[:len(comb)-1] // Pop last element
		usedSet[num] = false
	}
}

func main() {
	nums := []int{1, 2, 3}
	result := permute(nums)
	fmt.Println(result) // Output: [[1 2 3] [1 3 2] [2 1 3] [2 3 1] [3 1 2] [3 2 1]]
}
