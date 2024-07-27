package main

import "unicode"

func calculate(s string) int {
	stack, preSign, num, res := []int{}, '+', 0, 0
	for i, ch := range s {
		if unicode.IsDigit(ch) {
			num = num*10 + int(ch-'0')
		}
		if !unicode.IsDigit(ch) && ch != ' ' || i == len(s)-1 {
			switch preSign {
			case '+':
				stack = append(stack, num)
			case '-':
				stack = append(stack, -num)
			case '*':
				stack[len(stack)-1] *= num
			default:
				stack[len(stack)-1] /= num
			}
			preSign = ch
			num = 0
		}
	}
	for _, v := range stack {
		res += v
	}
	return res
}
