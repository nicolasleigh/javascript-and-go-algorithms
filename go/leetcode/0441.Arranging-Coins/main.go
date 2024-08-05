package main

import (
	"fmt"
)

// arrangeCoins calculates the number of complete rows that can be formed with n coins
func arrangeCoins(n int) int {
	i := 0 // Initialize the row counter

	// Continue until there aren't enough coins to form the next row
	for n > i {
		i++    // Increment the row number
		n -= i // Subtract the current row number of coins from n
	}

	return i // Return the number of complete rows
}

func main() {
	n := 8
	rows := arrangeCoins(n)
	fmt.Printf("Number of complete rows: %d\n", rows) // Output should be 3
}
