package main

func distributeCandies(candyType []int) int {
	n := len(candyType) // How many candies
	res := 0
	set := make(map[int]struct{}) // How many candy types
	for _, v := range candyType {
		set[v] = struct{}{}
	}
	if len(set) < n/2 {
		res = len(set)
	} else {
		res = n / 2
	}
	return res
}
