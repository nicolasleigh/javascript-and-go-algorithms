package main

import "fmt"

func combine(n int, k int) [][]int {
	var res [][]int
	var comb []int

	backtrack(comb, &res, n, k, 1)
	return res
}

func backtrack(comb []int, res *[][]int, n, k, start int) {
	if len(comb) == k {
		// Create a copy of comb to add to results
		c := make([]int, k)
		copy(c, comb)
		*res = append(*res, c)
		return
	}
	for num := start; num <= n; num++ {
		comb = append(comb, num)
		backtrack(comb, res, n, k, num+1)
		comb = comb[:len(comb)-1]
	}
}

func main() {
	n := 4
	k := 2
	result := combine(n, k)
	fmt.Printf("Combinations of %d elements taken %d at a time: %v\n", n, k, result)
}
