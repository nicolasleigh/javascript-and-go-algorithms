package main

import "fmt"

func lastRemaining(n int) int {
	stepSize := 1
	start := 1
	leftToRight := true

	for n > 1 {
		if leftToRight || n%2 == 1 {
			start += stepSize
		}
		stepSize *= 2
		n /= 2
		leftToRight = !leftToRight
	}

	return start
}

func main() {
	n := 9 // Example input
	result := lastRemaining(n)
	fmt.Printf("The last remaining number is: %d\n", result)
}
