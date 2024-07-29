package main

import (
	"fmt"
	"strings"
)

func wordPattern(pattern string, s string) bool {
	temp := make(map[rune]string)
	str := strings.Split(s, " ")

	if len(pattern) != len(str) {
		return false
	}

	for i, c := range pattern {
		// Check whether the character is already in map or not
		if v, ok := temp[c]; ok {
			// If already in map and the value does not equal to the value in the string
			if v != str[i] {
				return false
			}
		} else {
			// If the character hasn't been put int the map, we just put it in the map,
			// but before doing that, we need to make sure that the same value in the string hasn't been put in the map yet
			for _, v := range temp {
				if v == str[i] {
					return false
				}
			}
			temp[c] = str[i]
		}
	}
	return true
}

func main() {
	pattern := "abba"
	s := "dog cat cat dog"
	fmt.Println(wordPattern(pattern, s)) // Output: true

	pattern = "abba"
	s = "dog cat cat fish"
	fmt.Println(wordPattern(pattern, s)) // Output: false

	pattern = "aaaa"
	s = "dog cat cat dog"
	fmt.Println(wordPattern(pattern, s)) // Output: false

	pattern = "abba"
	s = "dog dog dog dog"
	fmt.Println(wordPattern(pattern, s)) // Output: false
}
