package main

import (
	"fmt"
)

func combinationSum(candidates []int, target int) [][]int {
	var res [][]int
	var comb []int
	var sum int
	backtrack(candidates, comb, &res, target, sum, 0)
	return res
}

func backtrack(candidates, comb []int, res *[][]int, target, sum, start int) {
	if sum > target {
		return
	}

	if sum == target {
		// Make a copy of comb and append to res, equivalent JS code is: res.push([...comb]);
		temp := make([]int, len(comb))
		copy(temp, comb)
		*res = append(*res, temp)
		return
	}

	for i := start; i < len(candidates); i++ {
		comb = append(comb, candidates[i])
		sum += candidates[i]
		backtrack(candidates, comb, res, target, sum, i) // Pass i instead of i+1 to allow reuse of the same candidate
		comb = comb[:len(comb)-1]                        // Pop last element
		sum -= candidates[i]
	}
}

func main() {
	candidates := []int{2, 3, 6, 7}
	target := 7
	result := combinationSum(candidates, target)
	fmt.Println(result) // Output: [[2 2 3] [7]]
}
