package main

import (
	"fmt"
	"strconv"
	"strings"
)

func isAdditiveNumber(num string) bool {
	n := len(num)
	// i and j represent the length of the first and second number
	for i := 1; i <= n/2; i++ {
		// The length of the sum of the preceding two numbers must be greater or equal to max(i,j)
		for j := 1; max(i, j) <= n-i-j; j++ {
			if isValid(i, j, num) {
				return true
			}
		}
	}
	return false
}

func isValid(i, j int, num string) bool {
	// If the first number starts with 0 and the length greater than 1, return false
	if num[0] == '0' && i > 1 {
		return false
	}
	// If the second number starts with 0 and the length greater than 1, return false
	if num[i] == '0' && j > 1 {
		return false
	}
	x1, _ := strconv.Atoi(num[:i]) // The first number
	x2, _ := strconv.Atoi(num[i:i+j]) // The second number
	start := i + j // The start index of the sum
	for start < len(num) {
		x2 = x2 + x1 // Let x2 become the sum
		x1 = x2 - x1 // Let x1 become the second number
		sum := strconv.Itoa(x2)
		// Check whether the num string starts with the sum from the start index
		if !startsWith(num, sum, start) {
			return false
		}
		start += len(sum) // The start index of the next sum
	}
	return true
}

func startsWith(s, prefix string, start int) bool {
	return strings.HasPrefix(s[start:], prefix) 
}

func main() {
	fmt.Println(isAdditiveNumber("112358"))    // Output: true
	fmt.Println(isAdditiveNumber("199100199")) // Output: true
	fmt.Println(isAdditiveNumber("123"))       // Output: true
	fmt.Println(isAdditiveNumber("1023"))      // Output: false
}
