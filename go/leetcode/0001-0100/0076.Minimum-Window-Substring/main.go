package main

import (
	"fmt"
)

func minWindow(s string, t string) string {
	// Map to store the frequency of characters in t
	m := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		m[t[i]]++
	}

	// Variables to track the sliding window
	start := 0
	end := 0
	counter := len(t)
	minStart := 0
	minLen := len(s) + 1 // Initialize to a value greater than any possible substring length in s

	// Move end to find a valid window
	for end < len(s) {
		// If the character at end exists in t, decrease the counter
		if m[s[end]] > 0 {
			counter--
		}
		// Decrease the count of the character in the map
		m[s[end]]--
		end++

		// When a valid window is found, move start to find a smaller window
		for counter == 0 {
			if end-start < minLen {
				minStart = start
				minLen = end - start
			}
			// Increase the count of the character at start
			m[s[start]]++
			// If the character at start exists in t, increase the counter
			if m[s[start]] > 0 {
				counter++
			}
			start++
		}
	}

	if minLen == len(s)+1 {
		return ""
	}

	return s[minStart : minStart+minLen]
}

func main() {
	s := "ADOBECODEBANC"
	t := "ABC"
	result := minWindow(s, t)
	fmt.Printf("Minimum window in '%s' containing all characters of '%s' is '%s'\n", s, t, result)
}
