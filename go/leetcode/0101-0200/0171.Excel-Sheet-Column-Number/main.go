package main

func titleToNumber(s string) int {
	res :=  0
	for i := 0; i < len(s); i++ {
		val := int(s[i] - 'A' + 1)
		res = res*26 + val
	}
	return res
}
