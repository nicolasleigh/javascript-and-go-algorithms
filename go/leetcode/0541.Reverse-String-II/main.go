package main

import (
	"fmt"
)

// reverseStr reverses substrings of length k in a string s.
func reverseStr(s string, k int) string {
	// Convert string to a slice of runes to handle Unicode characters
	res := []rune(s)
	length := len(res)

	for i := 0; i < length; i += 2 * k {
		left := i
		right := min(i+k-1, length-1)
		for left < right {
			res[left], res[right] = res[right], res[left]
			left++
			right--
		}
	}
	return string(res)
}

func main() {
	s := "abcdefg"
	k := 2
	fmt.Println(reverseStr(s, k)) // Output: "bacdfeg"
}
