package main

import (
	"fmt"
)
// Question: How many 5s are there in the factorial of 25?
// You may guess the answer is 25 / 5 = 5, however there are actually 6.
// Here are all the multiples of 5 in the factorial of 25:
// 5, 10, 15, 20, 25
// Another way to write this is:
// (5 * 1), (5 * 2), (5 * 3), (5 * 4), (5 * 5)
// As you can see, 5 is actually multiplied 6 times.
// We can simplify the answer to the Factorial Trailing Zeroes question to the following:
// (n / 5) + (n / 5^2) + (n / 5^3)... (n / 5^x)
func trailingZeroes(n int) int {
	numZeroes := 0
	for i := 5; i <= n; i *= 5 {
		numZeroes += n / i
	}
	return numZeroes
}

func main() {
	n := 125 // Example input
	fmt.Println(trailingZeroes(n)) // Output: 31
}
