package main

import (
	"fmt"
)

func getPermutation(n int, k int) string {
	// Create nums array from 1 to n
	nums := make([]int, n)
	for i := 0; i < n; i++ {
		nums[i] = i + 1
	}

	// Precompute factorials
	factorials := make([]int, n+1)
	factorials[0] = 1
	for i := 1; i <= n; i++ {
		factorials[i] = factorials[i-1] * i
	}

	k-- // Convert k from 1-indexed to 0-indexed

	var result []byte

	for i := n - 1; i >= 0; i-- {
		index := k / factorials[i]
		k = k % factorials[i]

		result = append(result, byte(nums[index]+'0'))
		// Remove nums[index] from slice
		nums = append(nums[:index], nums[index+1:]...)
	}

	return string(result)
}

func main() {
	n := 4
	k := 9
	fmt.Printf("The %d-th permutation of %d numbers is: %s\n", k, n, getPermutation(n, k))
}
