package main

import (
	"slices"
	"strconv"
)

func findRelativeRanks(score []int) []string {
	mp := make(map[int]int) // key: score value; value: original index
	for i, v := range score {
		mp[v] = i
	}
	slices.SortFunc(score, func(a, b int) int {
		return b - a
	})
	res := make([]string, len(score))
	for i, v := range score {
		if i == 0 {
			res[mp[v]] = "Gold Medal"
		} else if i == 1 {
			res[mp[v]] = "Silver Medal"
		} else if i == 2 {
			res[mp[v]] = "Bronze Medal"
		} else {
			res[mp[v]] = strconv.Itoa(i + 1)
		}
	}
	return res
}
