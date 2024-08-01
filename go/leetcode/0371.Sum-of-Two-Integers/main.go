// https://leetcode.com/problems/sum-of-two-integers/solutions/84278/a-summary-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently/

package main

import "fmt"

func getSum(a int, b int) int {
	if a == 0 {
		return b
	}
	if b == 0 {
		return a
	}
	return getSum(a^b, (a&b)<<1)
}

func main() {
	fmt.Println(getSum(1, 2))  // Output: 3
	fmt.Println(getSum(-1, 1)) // Output: 0
	fmt.Println(getSum(2, 2))  // Output: 4
}
