package main

import (
	"fmt"
)

func countBits(n int) []int {
	res := make([]int, 0, n+1)

	// Iterating from 0 to n
	for i := 0; i <= n; i++ {
		sum := 0
		num := i

		// Counting 1's in binary representation of i
		for num != 0 {
			// sum += num % 2
			sum += num & 1
			// num = num / 2
			num = num >> 1
		}

		// Adding sum to the res slice
		res = append(res, sum)
	}

	return res
}

func main() {
	n := 5
	result := countBits(n)
	fmt.Println(result) // Output: [0, 1, 1, 2, 1, 2]
}