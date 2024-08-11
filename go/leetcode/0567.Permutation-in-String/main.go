package main

import (
	"fmt"
)

func checkInclusion(s1, s2 string) bool {
	if len(s2) < len(s1) {
		return false
	}
	var freqS1, freqS2 [26]int
	for _, c := range s1 {
		freqS1[c-'a']++
	}

	l, r := 0, 0
	for r < len(s2) {
		freqS2[s2[r]-'a']++
		if r-l+1 == len(s1) {
			if match(freqS1, freqS2) {
				return true
			}
		}
		if r-l+1 < len(s1) {
			r++
		} else {
			freqS2[s2[l]-'a']--
			l++
			r++
		}
	}
	return false
}

func match(a, b [26]int) bool {
	for i := 0; i < 26; i++ {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

func main() {
	s1 := "ab"
	s2 := "eidbaooo"
	result := checkInclusion(s1, s2)
	fmt.Println(result) // Output: true
}
