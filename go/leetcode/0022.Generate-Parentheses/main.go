package main

import "fmt"

func generateParenthesis(n int) []string {
	if n == 0 {
		return []string{}
	}
	res := []string{}
	findGenerateParenthesis(n, n, "", &res)
	return res
}

func findGenerateParenthesis(l, r int, str string, res *[]string) {
	if l == 0 && r == 0 {
		*res = append(*res, str)
		return
	}
	if l > 0 {
		findGenerateParenthesis(l-1, r, str+"(", res)
	}
	if r > 0 && l < r {
		findGenerateParenthesis(l, r-1, str+")", res)
	}
}

func main() {
	fmt.Println(generateParenthesis(3))
}