package main

import "fmt"

func isValid(s string) bool {
	stack := make([]rune, 0)

	matchingBracket := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	for _, char := range s {
		switch char {
		case '(', '[', '{':
			stack = append(stack, matchingBracket[char])
		default:
			if len(stack) == 0 || stack[len(stack)-1] != char {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

func main() {
	fmt.Println(isValid("(){}"))
}