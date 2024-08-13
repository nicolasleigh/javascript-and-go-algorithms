package main

import (
	"fmt"
)

func matrixReshape(mat [][]int, r int, c int) [][]int {
	// Flatten the matrix
	flatten := []int{}
	for _, row := range mat {
			flatten = append(flatten, row...)
	}

	// Check if reshape is possible
	if r*c != len(flatten) {
		return mat
	}

	// Create the new matrix
	newMat := make([][]int, r)
	for i := range newMat {
		newMat[i] = make([]int, c)
	}
	for i := 0; i < r; i++ {
		for j := 0; j < c; j++ {
			newMat[i][j] = flatten[i*c+j]
		}
	}

	return newMat
}

func main() {
	mat := [][]int{
		{1, 2},
		{3, 4},
	}
	r, c := 1, 4

	result := matrixReshape(mat, r, c)
	fmt.Println(result) // Output: [[1, 2, 3, 4]]
}