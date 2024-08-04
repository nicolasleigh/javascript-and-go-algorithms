package main

import (
	"strings"
)

func countSegments1(s string) int {
	// fields := strings.FieldsFunc(s, unicode.IsSpace)
	fields := strings.Fields(s)
	return len(fields)
}

func countSegments(s string) int {
	segments := false
	cnt := 0
	for _, v := range s {
		if v == ' ' && segments {
			segments = false
			cnt += 1
		} else if v != ' ' {
			segments = true
		}
	}
	if segments {
		cnt++
	}
	return cnt
}
