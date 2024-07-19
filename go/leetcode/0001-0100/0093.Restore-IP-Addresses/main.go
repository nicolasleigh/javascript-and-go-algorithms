package main

import (
	"fmt"
	"strconv"
	"strings"
)

func restoreIpAddresses(s string) []string {
	var res []string
	var comb []string

	backtrack(comb, &res, s, 0)
	return res
}

func backtrack(comb []string, res *[]string, s string, start int) {
	if len(comb) == 4 && start >= len(s) {
		*res = append(*res, strings.Join(comb, "."))
		return
	}

	if len(comb) == 4 || start >= len(s) {
		return
	}

	for i := start; i < len(s) && i < start+3; i++ {
		str := s[start : i+1]
		if isValidIpSegment(str) {
			comb = append(comb, str)
			backtrack(comb, res, s, i+1)
			comb = comb[:len(comb)-1]
		}
	}
}

func isValidIpSegment(str string) bool {
	if len(str) == 0 || len(str) > 1 && str[0] == '0' || len(str) > 3 {
		return false
	}
	num, err := strconv.Atoi(str)
	if err != nil || num < 0 || num > 255 {
		return false
	}
	return true
}

func main() {
	s := "25525511135"
	fmt.Println("Restored IP addresses:", restoreIpAddresses(s))
}
