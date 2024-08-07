package main

import (
	"slices"
	"strconv"
	"strings"
)

func addStrings(num1, num2 string) string {
	carry, res := 0, []string{}
	i, j := len(num1)-1, len(num2)-1

	for i >= 0 || j >= 0 || carry > 0 {
		x, y := 0, 0

		if i >= 0 {
			x = int(num1[i] - '0')
			i--
		}

		if j >= 0 {
			y = int(num2[j] - '0')
			j--
		}

		sum := x + y + carry
		res = append(res, strconv.Itoa(sum%10))
		carry = sum / 10
	}

	slices.Reverse(res)
	return strings.Join(res, "")
}

func main() {
	// Example usage
	num1 := "123"
	num2 := "456"
	result := addStrings(num1, num2)
	println(result) // Output: 579
}
