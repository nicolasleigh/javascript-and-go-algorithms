package main

import (
	"fmt"
	"strconv"
)

/*
1 ~ 9 include 9 one digit number;
10 ~ 99 include 90 two digits number;
100 ~ 999 include 900 three digits number;
1000 ~ 9999 include 9000 four digits number;
...

len is how many digits:1 or 2 or 3 ..., count is 9 or 90 or 900 ...
*/

func findNthDigit(n int) int {
	len := 1
	count := 9
	start := 1

	// Determine the length of the numbers that contain the nth digit
	for n > len*count {
		n -= len * count
		len += 1
		count *= 10
		start *= 10
	}

	// Find the exact number that contains the nth digit
	start += (n - 1) / len
	s := strconv.Itoa(start)

	// Get the nth digit from the number
	return int(s[(n-1)%len] - '0')
}

func main() {
	n := 11 // Example input
	result := findNthDigit(n)
	fmt.Println(result) // Output: 0
}
