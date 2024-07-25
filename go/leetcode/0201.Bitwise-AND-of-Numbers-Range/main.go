package main

import (
	"fmt"
)

func rangeBitwiseAnd(left int, right int) int {
	count := 0
	for left != right {
		left >>= 1
		right >>= 1
		count++
	}
	return left << count
}

func main() {
	left := 5
	right := 7
	result := rangeBitwiseAnd(left, right)
	fmt.Println(result) // Output: 4
}
