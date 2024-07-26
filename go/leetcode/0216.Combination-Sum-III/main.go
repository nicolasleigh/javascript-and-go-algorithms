package main

import (
	"fmt"
)

func combinationSum3(k int, n int) [][]int {
	var res [][]int
	var comb []int
	var sum int

	backtrack(1, k, n, sum, &res, comb)
	return res
}

func backtrack(start, k, n, sum int, res *[][]int, comb []int) {
	if len(comb) == k {
		if sum == n {
			c := make([]int, len(comb))
			copy(c, comb)
			*res = append(*res, c)
		}
		return
	}

	for num := start; num <= 9; num++ {
		comb = append(comb, num)
		sum += num
		backtrack(num+1, k, n, sum, res, comb)
		comb = comb[:len(comb)-1]
		sum -= num
	}
}

func main() {
	k := 3
	n := 7
	fmt.Println(combinationSum3(k, n)) // Output: [[1 2 4]]

	k = 3
	n = 9
	fmt.Println(combinationSum3(k, n)) // Output: [[1 2 6] [1 3 5] [2 3 4]]
}
