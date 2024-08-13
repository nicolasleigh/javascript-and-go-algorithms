package main

import "fmt"

func countArrangement(n int) int {
	count := 0
	helper(n, 1, &count, make([]bool, n+1))
	return count
}

func helper(n, pos int, count *int, used []bool) {
	if pos > n {
		*count++
		return
	}

	for i := 1; i <= n; i++ {
		if !used[i] && (i%pos == 0 || pos%i == 0) {
			used[i] = true
			helper(n, pos+1, count, used)
			used[i] = false
		}
	}
}

func main() {
	fmt.Println(countArrangement(3)) // Example usage
}
