package main

import (
	"fmt"
)

func maxProduct(words []string) int {
	n := len(words)
	value := make([]int, n)

	// Using bits to represents word, 'abc' is 0111
	for i := 0; i < n; i++ {
		for j := 0; j < len(words[i]); j++ {
			// For example: words[i][j]='a', 1<<0 means 1 left shift 0 times, that is 1*2^0=1
			// words[i][j]='c', 1<<2 means 1 left shift 2 times, that is 1*2^2=4
			value[i] |= 1 << (words[i][j] - 'a')
		}
	}

	maxProduct := 0
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			// If word i and word j don't share common letters
			if (value[i] & value[j]) == 0 {
				maxProduct = max(maxProduct, len(words[i])*len(words[j]))
			}
		}
	}

	return maxProduct
}

func main() {
	words := []string{"abcw", "baz", "foo", "bar", "xtfn", "abcdef"}
	fmt.Println(maxProduct(words)) // Output: 16
}
