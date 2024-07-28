package main

import (
	"fmt"
)

func singleNumber(nums []int) []int {
	xor := 0
	for _, num := range nums {
		xor ^= num
	}
	// Find the lowest set bit in xor
	// -xor: This is the two’s complement negation of xor.
	// In binary arithmetic, negating a number in two’s complement involves flipping all the bits and adding 1.
	lowestBit := xor & -xor
	// res[0] represents the first group which has lowestBit off
	// res[1] represents the second group which has lowestBit on
	res := make([]int, 2)
	for _, num := range nums {
		if (num & lowestBit) == 0 {
			res[0] ^= num
		} else {
			res[1] ^= num
		}
	}
	return res
}

func main() {
	nums := []int{1, 2, 1, 3, 2, 5}
	result := singleNumber(nums)
	fmt.Println(result) // Output: [3 5]
}
