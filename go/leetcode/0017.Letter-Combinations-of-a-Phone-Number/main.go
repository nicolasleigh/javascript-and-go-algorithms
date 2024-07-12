package main

import "fmt"

var (
	letterMap = []string{
		"",     //0
		"",     //1
		"abc",  //2
		"def",  //3
		"ghi",  //4
		"jkl",  //5
		"mno",  //6
		"pqrs", //7
		"tuv",  //8
		"wxyz", //9
	}
	res = []string{}
)

// 解法一 DFS
func letterCombinations(digits string) []string {
	if digits == "" {
		return []string{}
	}
	// Every time run this function, set the global variable res to initial state
	res = []string{}
	findCombination(digits, 0, "")
	return res
}

func findCombination(digits string, index int, s string) {
	if index == len(digits) {
		res = append(res, s)
		return
	}
	num := digits[index]
	letter := letterMap[num-'0']
	for i := 0; i < len(letter); i++ {
		findCombination(digits, index+1, s+string(letter[i]))
	}
}

func main() {
	fmt.Println(letterCombinations("23"))
}
