package main

import "fmt"

var roman = map[string]int{
	"I": 1,
	"V": 5,
	"X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000,
}

func romanToInt(s string) int {
	if s == "" {
		return 0
	}
	num, lastNum, total := 0, 0, 0
	for i := len(s) - 1; i >= 0; i-- {
		char := s[i : i+1]
		num = roman[char]
		if num < lastNum {
			total = total - num
		} else {
			total = total + num
		}
		lastNum = num
	}
	return total
}

func main() {
	fmt.Println(romanToInt("MCMXCIV"))
}
