package main

import "fmt"

type NumMatrix struct {
	sums [][]int
}

// Solution 1
func Constructor1(matrix [][]int) NumMatrix {
	row := len(matrix)
	col := len(matrix[0])
	// Make 2D slice
	sums := make([][]int, row)
	for i := range sums {
		sums[i] = make([]int, col)
	}
	// Base case
	sums[0][0] = matrix[0][0]
	// First col
	for n := range row {
		if n != 0 {
			sums[n][0] = matrix[n][0] + sums[n-1][0]
		}
	}
	// First row
	for n := range col {
		if n != 0 {
			sums[0][n] = matrix[0][n] + sums[0][n-1]
		}
	}
	for i := 1; i < row; i++ {
		for j := 1; j < col; j++ {
			sums[i][j] = matrix[i][j] + sums[i-1][j] + sums[i][j-1] - sums[i-1][j-1]
		}
	}
	return NumMatrix{sums}
}
func (this *NumMatrix) SumRegion1(row1, col1, row2, col2 int) int {
	if row1 == 0 && col1 == 0 {
		return this.sums[row2][col2]
	} else if row1 == 0 {
		return this.sums[row2][col2] - this.sums[row2][col1-1]
	} else if col1 == 0 {
		return this.sums[row2][col2] - this.sums[row1-1][col2]
	} else {
		return this.sums[row2][col2] - this.sums[row2][col1-1] - this.sums[row1-1][col2] + this.sums[row1-1][col1-1]
	}
}

// Solution 2
func Constructor(matrix [][]int) NumMatrix {
	row := len(matrix)
	col := len(matrix[0])

	sums := make([][]int, row+1)
	for i := range sums {
		sums[i] = make([]int, col+1)
	}
	for i := 1; i <= row; i++ {
		for j := 1; j <= col; j++ {
			sums[i][j] = matrix[i-1][j-1] + sums[i-1][j] + sums[i][j-1] - sums[i-1][j-1]
		}
	}
	return NumMatrix{sums}
}
func (this *NumMatrix) SumRegion(row1, col1, row2, col2 int) int {
	return this.sums[row2+1][col2+1] - this.sums[row2+1][col1] - this.sums[row1][col2+1] + this.sums[row1][col1]
}

func main() {
	matrix := [][]int{
		{3, 0, 1, 4, 2},
		{5, 6, 3, 2, 1},
		{1, 2, 0, 1, 5},
		{4, 1, 0, 1, 7},
		{1, 0, 3, 0, 5},
	}
	obj := Constructor(matrix)
	fmt.Println(obj.SumRegion(2, 1, 4, 3)) // Output: 8
	fmt.Println(obj.SumRegion(1, 1, 2, 2)) // Output: 11
	fmt.Println(obj.SumRegion(1, 2, 2, 4)) // Output: 12
}
