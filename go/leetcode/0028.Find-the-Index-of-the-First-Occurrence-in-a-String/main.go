package main

import (
	"fmt"
	"strings"
)

func strStr(haystack string, needle string) int {
	if len(haystack) < len(needle) {
		return -1
	}

	for i := 0; i <= len(haystack)-len(needle); i++ {
		substring := haystack[i : i+len(needle)]
		if substring == needle {
			return i
		}
	}

	return -1
}

// 解法二
func strStr1(haystack string, needle string) int {
	return strings.Index(haystack, needle)
}

func main() {
	haystack := "hello"
	needle := "ll"
	index := strStr(haystack, needle)
	fmt.Println("Index:", index)
}
