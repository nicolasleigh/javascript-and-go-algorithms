package main

import (
	"cmp"
	"fmt"
	"slices"
)

func groupAnagrams(strs []string) [][]string {
	record, res := map[string][]string{}, [][]string{}
	for _, str := range strs {
		s := []byte(str)
		slices.SortFunc(s, func(a, b byte) int {
			return cmp.Compare(a, b)
		})
		ss := record[string(s)]
		ss = append(ss, str)
		record[string(s)] = ss
	}
	for _, v := range record {
		res = append(res, v)
	}
	return res
}

func main() {
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
}
