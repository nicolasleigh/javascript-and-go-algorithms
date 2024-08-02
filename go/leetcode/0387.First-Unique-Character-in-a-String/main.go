package main

func firstUniqChar(s string) int {
	res := make([]int, 26)
	for _, v := range s {
		res[v-'a']++
	}
	for i, v := range s {
		if res[v-'a'] == 1 {
			return i
		}
	}
	return -1
}
