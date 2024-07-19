package main

import "fmt"

// https://leetcode.com/problems/gray-code/solutions/29891/share-my-solution/
// When n=3, we can get the result based on n=2. 00,01,11,10 -> (000,001,011,010)(110,111,101,100)
func grayCode(n int) []int {
	res := []int{0}

	for i := 0; i < n; i++ {
		for k := len(res) - 1; k >= 0; k-- {
			res = append(res, res[k]|(1<<i))
		}
	}

	return res
}

func main() {
	fmt.Println(grayCode(3))
}
