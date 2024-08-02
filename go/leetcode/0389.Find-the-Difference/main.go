package main

import "fmt"

func findTheDifference(s, t string) byte {
	var xor rune
	for _, v := range s {
		xor ^= v
	}
	for _, v := range t {
		xor ^= v
	}
	return byte(xor)
}

func main() {
	s := "abcd"
	t := "abcde"
	result := findTheDifference(s, t)
	fmt.Printf("The difference character is: %c\n", result)
}
