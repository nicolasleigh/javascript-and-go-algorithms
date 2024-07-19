package main

import (
	"fmt"
	"sort"
)

func combinationSum2(candidates []int, target int) [][]int {
	var res [][]int
	var comb []int
	var sum int

	// Sort candidates array
	sort.Ints(candidates)
	backtrack(candidates, comb, &res, target, sum, 0)
	return res
}

func backtrack(candidates, comb []int, res *[][]int, target, sum, start int) {
	if sum > target {
		return
	}

	if sum == target {
		// Make a copy of comb and append to res
		temp := make([]int, len(comb))
		copy(temp, comb)
		*res = append(*res, temp)
		return
	}

	for i := start; i < len(candidates); i++ {
		// Skip duplicates
		if i > start && candidates[i] == candidates[i-1] {
			continue
		}

		comb = append(comb, candidates[i])
		sum += candidates[i]
		backtrack(candidates, comb, res, target, sum, i+1) // Move to next index
		comb = comb[:len(comb)-1]                          // Pop last element
		sum -= candidates[i]
	}
}

func main() {
	candidates := []int{10, 1, 2, 7, 6, 1, 5}
	target := 8
	result := combinationSum2(candidates, target)
	fmt.Println(result) // Output: [[1 1 6] [1 2 5] [1 7] [2 6]]
}
