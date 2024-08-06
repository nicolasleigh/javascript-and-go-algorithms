package main

import (
	"fmt"
	"sort"
)

func findContentChildren(g []int, s []int) int {
	count := 0

	sort.Ints(g)
	sort.Ints(s)

	for _, cookie := range s {
		if count < len(g) && cookie >= g[count] {
			count++
		}
	}

	return count
}

func main() {
	g := []int{1, 2, 3}
	s := []int{1, 1}

	result := findContentChildren(g, s)
	fmt.Println(result) // Output: 1
}
