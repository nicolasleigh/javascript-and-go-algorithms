package main

import (
	"fmt"
)

func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}

	col := len(matrix[0]) - 1
	row := 0

	for col >= 0 && row <= len(matrix)-1 {
		if target == matrix[row][col] {
			return true
		} else if target < matrix[row][col] {
			col--
		} else if target > matrix[row][col] {
			row++
		}
	}

	return false
}

func main() {
	matrix := [][]int{
		{1, 4, 7, 11, 15},
		{2, 5, 8, 12, 19},
		{3, 6, 9, 16, 22},
		{10, 13, 14, 17, 24},
		{18, 21, 23, 26, 30},
	}
	target := 5

	found := searchMatrix(matrix, target)
	fmt.Println(found) // Output: true
}
