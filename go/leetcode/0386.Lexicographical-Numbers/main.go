package main

import "fmt"

func lexicalOrder(n int) []int {
	var res []int
	for i := 1; i < 10; i++ {
		dfs(i, n, &res)
	}
	return res
}

func dfs(cur, n int, res *[]int) {
	if cur > n {
		return
	}
	*res = append(*res, cur)
	for i := 0; i < 10; i++ {
		next := 10*cur + i
		if next > n {
			return
		}
		dfs(next, n, res)
	}
}

func main() {
	n := 30 // Example input
	result := lexicalOrder(n)
	fmt.Println(result)
}
