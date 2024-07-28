package main

import (
	"fmt"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	temp := make([]int, 26)

	for i := 0; i < len(s); i++ {
		temp[s[i]-'a']++
		temp[t[i]-'a']--
	}

	for _, count := range temp {
		if count != 0 {
			return false
		}
	}

	return true
}

func main() {
	s := "anagram"
	t := "nagaram"

	fmt.Println(isAnagram(s, t)) // Output: true
}
