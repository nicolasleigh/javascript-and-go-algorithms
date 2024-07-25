package main

import (
	"fmt"
)

// getSum function calculates the sum of the squares of the digits of n
func getSum(n int) int {
	sum := 0
	for n > 0 {
		digit := n % 10
		sum += digit * digit
		n /= 10
	}
	return sum
}

// isHappy function determines if a number is a happy number
func isHappy(n int) bool {
	// Using set to avoid infinite loop
	set := make(map[int]bool)
	for n != 1 && !set[n] {
		set[n] = true
		n = getSum(n)
	}
	return n == 1
}

func main() {
	n := 19
	fmt.Println(isHappy(n)) // Output: true
}
