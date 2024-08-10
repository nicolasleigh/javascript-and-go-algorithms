package main

import (
	"slices"
	"strings"
)

func reverseWords(s string) string {
	ss := strings.Fields(s)

	for i, v := range ss {
		a := []byte(v)
		slices.Reverse(a)
		ss[i] = string(a)
	}
	return strings.Join(ss, " ")
}
