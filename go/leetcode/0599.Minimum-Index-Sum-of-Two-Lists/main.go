package main

import "math"

func findRestaurant(list1 []string, list2 []string) []string {
	mp := make(map[string]int)
	minv := math.MaxInt32
	res := []string{}
	for i, v := range list1 {
		mp[v] = i
	}
	for i, v := range list2 {
		if idx, ok := mp[v]; ok {
			if minv > i+idx {
				minv = i + idx
				res = []string{}
			}
			if minv == i+idx {
				res = append(res, v)
			}
		}
	}
	return res
}
