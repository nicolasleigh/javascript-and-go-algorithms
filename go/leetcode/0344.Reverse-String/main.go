package main

import "slices"

func reverseString1(s []byte) {
	slices.Reverse(s)
}

func reverseString(s []byte) {
	l, r := 0, len(s)-1
	for l < r {
		s[l], s[r] = s[r], s[l]
		l++
		r--
	}
}
