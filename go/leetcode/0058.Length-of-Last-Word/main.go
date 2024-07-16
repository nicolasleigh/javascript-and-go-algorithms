package main

import (
	"fmt"
	"strings"
)

func lengthOfLastWord(s string) int {
	s = strings.TrimSpace(s)
	ss := strings.Split(s, " ")
	lastWord := ss[len(ss)-1]
	return len(lastWord)
}

func main() {
	s := "   fly me     to    the     moon   "
	fmt.Println(lengthOfLastWord(s))
}
