package main

import "strings"

func detectCapitalUse(word string) bool {
	case1 := strings.ToUpper(word)
	case2 := strings.ToLower(word)
	case3 := strings.ToUpper(string(word[0])) + strings.ToLower(string(word[1:]))
	if case1 == word || case2 == word || case3 == word {
		return true
	}
	return false
}