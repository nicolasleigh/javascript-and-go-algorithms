package main

import (
	"fmt"
)

// longestPalindrome calculates the length of the longest palindrome that can be formed from the given string
func longestPalindrome(s string) int {
	// Create a map to count the frequency of each character
	cnt := make(map[rune]int)

	// Count the frequency of each character
	for _, ch := range s {
		cnt[ch]++
	}

	res := 0
	odd := false

	// Calculate the length of the longest palindrome
	for _, v := range cnt {
		if v%2 == 0 {
			// Add even frequencies entirely
			res += v
		} else {
			res += v - 1 // Add the largest even part
			odd = true       // Mark that there is an odd frequency
		}
	}

	// Add one if there's any odd frequency to place one odd character in the middle
	if odd {
		res++
	}

	return res
}

func main() {
	s := "abccccdd"                   // Example usage
	fmt.Println(longestPalindrome(s)) // Output: 7
}
