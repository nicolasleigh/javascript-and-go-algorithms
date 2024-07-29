package main

import (
	"fmt"
	"unicode"
)

func calculate(s string) int {
	type pair struct {
		prevCalcValue int
		sign          int
	}
	var stack []pair
	sum := 0
	sign := 1

	for i := 0; i < len(s); i++ {
		ch := s[i]

		if unicode.IsDigit(rune(ch)) {
			num := 0
			for i < len(s) && unicode.IsDigit(rune(s[i])) {
				num = num*10 + int(s[i]-'0')
				i++
			}
			sum += num * sign
			sign = 1 // reset sign
			i--      // decrement i because for loop will increment it
		} else if ch == '(' {
			// save current state of (sum, sign) in stack
			stack = append(stack, pair{sum, sign})
			// reset sum and sign for inner bracket calculation
			sum = 0
			sign = 1
		} else if ch == ')' {
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			sum = top.prevCalcValue + top.sign*sum
		} else if ch == '-' {
			// toggle sign
			sign = -1 * sign
		}
	}
	return sum
}

func main() {
	expression := "1+(4+5+2)-3+(6+8)"
	result := calculate(expression)
	fmt.Println(result) // Output: 23
}
