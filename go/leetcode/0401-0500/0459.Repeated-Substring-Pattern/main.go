package main

import (
	"fmt"
	"strings"
)

/*
The idea behind this approach is that if a string s can be constructed by repeating a substring,
then concatenating two copies of s together and removing the first and last character would still contain s as a substring.

simple proof:
if S is composed of k substrings s, then S1 = S + S should contain 2k substrings. 
Destroying the first and the last character leads to at least (2k - 2) substrings left.
since k >= 2,
2k - 2 >= k
which means that S1[1:-1] should still contain S
*/

func repeatedSubstringPattern(s string) bool {
	doubled := s + s
	sub := doubled[1 : len(doubled)-1]
	return strings.Contains(sub, s)
}

func main() {
	s := "abab"
	result := repeatedSubstringPattern(s)
	fmt.Println(result) // Output: true
}
