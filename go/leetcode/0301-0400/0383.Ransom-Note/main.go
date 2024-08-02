package main

import "fmt"

func canConstruct(ransomNote string, magazine string) bool {
	// Create an array to count the occurrences of each character in the magazine
	count := make([]int, 26)

	// Iterate over the magazine and increment the count for each character
	for _, char := range magazine {
		i := char - 'a'
		count[i]++
	}

	// Iterate over the ransom note and decrement the count for each character
	for _, char := range ransomNote {
		i := char - 'a'
		if count[i] == 0 {
			return false // If the character count is zero, return false
		}
		count[i]--
	}

	return true
}

func main() {
	ransomNote := "a"
	magazine := "b"
	fmt.Println(canConstruct(ransomNote, magazine)) // Output: false

	ransomNote = "aa"
	magazine = "ab"
	fmt.Println(canConstruct(ransomNote, magazine)) // Output: false

	ransomNote = "aa"
	magazine = "aab"
	fmt.Println(canConstruct(ransomNote, magazine)) // Output: true
}
