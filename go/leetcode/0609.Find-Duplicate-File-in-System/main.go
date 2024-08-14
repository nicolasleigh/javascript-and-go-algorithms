package main

import "strings"

func findDuplicate(paths []string) [][]string {
	cache := make(map[string][]string)
	for _, path := range paths {
		parts := strings.Split(path, " ")
		dir := parts[0]
		for i := 1; i < len(parts); i++ {
			bracketPos := strings.IndexByte(parts[i], '(')
			content := parts[i][bracketPos+1 : len(parts[i])-1]
			cache[content] = append(cache[content], dir+"/"+parts[i][:bracketPos])
		}
	}
	res := [][]string{}
	for _, group := range cache {
		if len(group) >= 2 {
			res = append(res, group)
		}
	}
	return res
}
