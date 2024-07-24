package main

import (
	"fmt"
)

func findRepeatedDnaSequences(s string) []string {
	counter := make(map[string]int)
	res := []string{}

	if len(s) < 10 {
		return res
	}

	// Count all 10-letter-long sequences
	for i := 0; i <= len(s)-10; i++ {
		seq := s[i : i+10]
		counter[seq]++
	}

	// Collect sequences that occur more than once
	for seq, count := range counter {
		if count > 1 {
			res = append(res, seq)
		}
	}

	return res
}

func main() {
	s := "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
	fmt.Println(findRepeatedDnaSequences(s)) // Output: [AAAAACCCCC CCCCCAAAAA]
}
