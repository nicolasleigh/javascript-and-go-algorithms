package main

import (
	"fmt"
	"slices"
)

// findDiagonalOrder returns the elements of the matrix in diagonal order
func findDiagonalOrder(matrix [][]int) []int {
	m, n := len(matrix), len(matrix[0])
	if m == 0 || n == 0 {
		return []int{}
	}

	// d := make(map[int][]int) // map is unordered
	d := make([][]int, m+n)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			d[i+j] = append(d[i+j], matrix[i][j])
		}
	}

	res := []int{}
	flag := true
	for _, v := range d {
		if flag {
			slices.Reverse(v)
		}
		res = append(res, v...)
		flag = !flag
	}

	return res
}

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}
	result := findDiagonalOrder(matrix)
	fmt.Println("Diagonal order:", result) // Diagonal order: [1 2 4 7 5 3 6 8 9]
}

// https://leetcode.com/problems/diagonal-traverse/solutions/581868/easy-python-no-direction-checking/
