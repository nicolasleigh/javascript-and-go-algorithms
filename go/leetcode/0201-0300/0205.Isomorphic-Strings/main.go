package main

import "fmt"

// isIsomorphic function checks if two strings are isomorphic
func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	// The default value is 0, which means the key-value pair hasn't been added to the map.
	map1, map2 := make(map[byte]int), make(map[byte]int)

	for i := 0; i < len(s); i++ {
		if map1[s[i]] != map2[t[i]] {
			return false
		}

		map1[s[i]] = i + 1
		map2[t[i]] = i + 1
	}

	return true
}

func main() {
	s := "egg"
	t := "add"
	fmt.Println("Are the strings", s, "and", t, "isomorphic?", isIsomorphic(s, t)) // Output: true

	s = "foo"
	t = "bar"
	fmt.Println("Are the strings", s, "and", t, "isomorphic?", isIsomorphic(s, t)) // Output: false

	s = "paper"
	t = "title"
	fmt.Println("Are the strings", s, "and", t, "isomorphic?", isIsomorphic(s, t)) // Output: true
}
