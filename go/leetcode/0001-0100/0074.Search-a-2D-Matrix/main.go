package main

import "fmt"

func searchMatrix1(matrix [][]int, target int) bool {
	length := len(matrix) * len(matrix[0])
	low, high := 0, length-1
	temp := make([]int, 0, length)

	// Change 2D slice to 1D slice
	for _, v := range matrix {
		temp = append(temp, v...)
	}

	for low <= high {
		mid := low + (high-low)>>1
		if temp[mid] == target {
			return true
		}
		if temp[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return false
}

func searchMatrix(matrix [][]int, target int) bool {
	m, low, high := len(matrix[0]), 0, len(matrix[0])*len(matrix)-1
	for low <= high {
		mid := low + (high-low)>>1
		if matrix[mid/m][mid%m] == target {
			return true
		}
		if matrix[mid/m][mid%m] > target {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return false
}

func main() {
	matrix := [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}
	res := searchMatrix(matrix, 60)
	fmt.Println(res)
}
