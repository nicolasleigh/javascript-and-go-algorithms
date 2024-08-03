package main

import (
	"fmt"
	"strings"
)

func removeKdigits(num string, k int) string {
	stack := []rune{}

	for _, digit := range num {
		// For each digit, while the stack is not empty and k is greater than zero,
		// check if the current digit is smaller than the top of the stack.
		// If so, pop from the stack (remove the top digit) and decrement k.
		for len(stack) > 0 && k > 0 && stack[len(stack)-1] > digit {
			stack = stack[:len(stack)-1]
			k--
		}
		// Push the current digit onto the stack.
		stack = append(stack, digit)
	}

	// Remove remaining k digits from the end of the stack
	for k > 0 && len(stack) > 0 {
		stack = stack[:len(stack)-1]
		k--
	}

	// Construct the resulting number from the stack and remove any leading zeros.
	res := string(stack)
	res = strings.TrimLeft(res, "0")

	if res == "" {
		return "0"
	}
	return res
}

func main() {
	num1 := "1432219" // Example usage
	k1 := 3

	num2 := "21" // Example usage
	k2 := 2

	fmt.Println(removeKdigits(num1, k1))
	fmt.Println(removeKdigits(num2, k2))
}
