package main

import (
	"fmt"
)

func toHex(num int) string {
	if num == 0 {
		return "0"
	}
	if num < 0 {
		num = (1 << 32) + num
	}

	hexDigits := "0123456789abcdef"
	var hexNum string

	for num > 0 {
		digit := num % 16
		hexDigit := hexDigits[digit]
		hexNum = string(hexDigit) + hexNum
		num /= 16
	}

	return hexNum
}

func main() {
	num := -1 // Example usage
	fmt.Println(toHex(num))
}
