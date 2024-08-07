package main

import "strings"

func findWords(words []string) []string {
	s1 := "qwertyuiop"
	s2 := "asdfghjkl"
	s3 := "zxcvbnm"

	mp := map[byte]int{}
	for _, ch := range []byte(s1) {
		mp[ch] = 1
	}
	for _, ch := range []byte(s2) {
		mp[ch] = 2
	}
	for _, ch := range []byte(s3) {
		mp[ch] = 3
	}
	res := []string{}
	for _, str := range words {
		lower := strings.ToLower(str)
		sameLine := true
		for i := 1; i < len(str); i++ {
			first := lower[0]
			cur := lower[i]
			if mp[cur] != mp[first] {
				sameLine = false
				break
			}
		}
		if sameLine {
			res = append(res, str)
		}
	}
	return res
}
