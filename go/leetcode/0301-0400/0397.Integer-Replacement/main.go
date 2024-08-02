package main

import (
	"fmt"
	"math"
)

func integerReplacement(n int) int {
	res := math.MaxInt32
	backtrack(n, 0, &res)
	return res
}

func backtrack(n int, cnt int, res *int) {
	if n == 1 {
		*res = min(*res, cnt)
		return
	}
	if n%2 == 0 {
		backtrack(n/2, cnt+1, res)
	} else {
		backtrack(n+1, cnt+1, res)
		backtrack(n-1, cnt+1, res)
	}
}

func main() {
	n := 8 // Example input
	result := integerReplacement(n)
	fmt.Println(result) // Output: 3
}
