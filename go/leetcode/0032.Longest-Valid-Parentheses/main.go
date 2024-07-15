package main

import "fmt"

// 解法一 栈
func longestValidParentheses(s string) int {
	// 栈底永远存的是当前遍历过的字符串中上一个没有被匹配的右括号的下标。
	stack, res := []int{}, 0
	stack = append(stack, -1)
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			stack = append(stack, i)
		} else {
			stack = stack[:len(stack)-1]
			if len(stack) == 0 {
				stack = append(stack, i)
			} else {
				res = max(res, i-stack[len(stack)-1])
			}
		}
	}
	return res
}

func main() {
	fmt.Println(longestValidParentheses("())((()))"))
}
