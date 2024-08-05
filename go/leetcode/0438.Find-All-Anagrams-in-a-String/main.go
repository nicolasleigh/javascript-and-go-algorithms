// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/92007/sliding-window-algorithm-template-to-solve-all-the-leetcode-substring-search-problem/

package main

import (
	"fmt"
)

// findAnagrams finds all starting indices of t's anagrams in s
func findAnagrams(s string, t string) []int {
	var result []int

	if len(t) > len(s) {
		return result
	}

	// Initialize the map for character frequencies
	freq := make(map[rune]int)
	for _, c := range t {
		freq[c]++
	}

	stillNeed := len(freq)
	start, end := 0, 0

	// Start sliding window
	for end < len(s) {
		c := rune(s[end])
		if _, found := freq[c]; found {
			freq[c]--
			if freq[c] == 0 {
				stillNeed--
			}
		}
		end++

		// Shrink the window when all characters are matched
		for stillNeed == 0 {
			if end-start == len(t) {
				result = append(result, start)
			}
			char := rune(s[start])
			if _, found := freq[char]; found {
				freq[char]++
				if freq[char] > 0 {
					stillNeed++
				}
			}
			start++
		}
	}

	return result
}

func main() {
	s1 := "cbaebabacd"
	t1 := "abc"
	s2 := "cccba"
	t2 := "abc"
	indices1 := findAnagrams(s1, t1)
	indices2 := findAnagrams(s2, t2)
	fmt.Println("Anagram start indices:", indices1) // Output should be [0, 6]
	fmt.Println("Anagram start indices:", indices2) // Output should be [2]
}
