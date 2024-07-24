// https://leetcode.com/problems/single-number-ii/solutions/43295/detailed-explanation-and-generalization-of-the-bitwise-operation-method-for-single-numbers/
package main

import (
	"fmt"
)

func singleNumber(nums []int) int {
	x1, x2, mask := 0, 0, 0

	for _, i := range nums {
		x2 = x2 ^ (x1 & i)
		x1 = x1 ^ i
		mask = ^(x1 & x2)
		x2 = x2 & mask
		x1 = x1 & mask
	}

	return x1 // p = 1, in binary form p = '01', then p1 = 1, so we should return x1;
	// if p = 2, in binary form p = '10', then p2 = 1, so we should return x2.
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 3, 2}))           // Output: 3
	fmt.Println(singleNumber([]int{0, 1, 0, 1, 0, 1, 99})) // Output: 99
}
