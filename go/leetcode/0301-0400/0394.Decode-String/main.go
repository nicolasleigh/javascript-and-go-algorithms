package main

import (
	"fmt"
	"strings"
)

func decodeString(s string) string {
	var count []int
	var stack []strings.Builder
	var b strings.Builder
	num := 0

	for _, char := range s {
		if char >= '0' && char <= '9' {
			num = num*10 + int(char-'0')
		} else if char == '[' {
			count = append(count, num)
			num = 0
			var newB strings.Builder
			stack = append(stack, b)
			b = newB
		} else if char == ']' {
			k := count[len(count)-1]
			count = count[:len(count)-1]
			str := b.String()
			b = stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			for i := 0; i < k; i++ {
				b.WriteString(str)
			}
		} else {
			b.WriteByte(byte(char))
		}
	}

	return b.String()
}

func main() {
	s := "3[a2[bc]]"
	result := decodeString(s)
	fmt.Println(result) // Output: "abcbcabcbc"
}
