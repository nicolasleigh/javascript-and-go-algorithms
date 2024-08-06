// https://leetcode.com/problems/number-complement/solutions/96017/3-line-1-line-c/

package main

import (
	"fmt"
)

/*
num          = 00000101
mask         = 11111000
^mask ^ num  = 00000010
*/
// Function to find the complement of a number
func findComplement(num int) int {
	mask := ^0 // Start with all bits set to 1
	for num&mask != 0 {
		// As long as num and mask has bit 1 at the same place (i.e. overlap), shift mask left by one bit
		mask <<= 1
	}
	return ^mask ^ num
}

func main() {
	num := 5                         // Example input
	fmt.Println(findComplement(num)) // Output: 2
}
