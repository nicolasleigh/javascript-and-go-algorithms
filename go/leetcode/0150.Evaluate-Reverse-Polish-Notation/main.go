package main

import (
	"fmt"
	"strconv"
)

// evalRPN evaluates the value of an arithmetic expression in Reverse Polish Notation.
func evalRPN(tokens []string) int {
	stack := []int{}

	for _, token := range tokens {
		if n, err := strconv.Atoi(token); err == nil {
			stack = append(stack, n)
		} else {
			n2 := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			n1 := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			switch token {
			case "+":
				stack = append(stack, n1+n2)
			case "-":
				stack = append(stack, n1-n2)
			case "*":
				stack = append(stack, n1*n2)
			case "/":
				stack = append(stack, n1/n2)
			}
		}
	}

	return stack[0]
}

func main() {
	tokens := []string{"2", "1", "+", "3", "*"}
	result := evalRPN(tokens)
	fmt.Println("Result:", result) // Output: 9

	tokens = []string{"4", "13", "5", "/", "+"}
	result = evalRPN(tokens)
	fmt.Println("Result:", result) // Output: 6

	tokens = []string{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"}
	result = evalRPN(tokens)
	fmt.Println("Result:", result) // Output: 22
}
