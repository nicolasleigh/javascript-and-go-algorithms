package main

import (
	"fmt"
	"slices"
	"strings"
)

func convertToTitle(n int) string {
	var b strings.Builder
	for n > 0 {
		n--
		cur := n % 26
		n = n / 26
		b.WriteByte(byte(cur + 'A'))
	}

	// Reverse the string
	res := []byte(b.String())
	slices.Reverse(res)

	return string(res)
}

func main() {
	n := 28
	fmt.Println(convertToTitle(n)) // Output: "AB"
}
