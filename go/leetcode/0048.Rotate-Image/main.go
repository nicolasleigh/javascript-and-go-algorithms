package main

/*
1   2  3  4      1   5  9  13        13  9  5  1
5   6  7  8  =>  2   6  10 14  =>    14  10 6  2
9  10 11 12      3   7  11 15        15  11 7  3
13 14 15 16      4   8  12 16        16  12 8  4
*/

func rotate(matrix [][]int) {
	length := len(matrix)
	// rotate by diagonal 对角线变换
	for i := 0; i < length; i++ {
		for j := i + 1; j < length; j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}
	// rotate by vertical centerline 竖直轴对称翻转
	for i := 0; i < length; i++ {
		for j := 0; j < length/2; j++ {
			matrix[i][j], matrix[i][length-j-1] = matrix[i][length-j-1], matrix[i][j]
		}
	}
}
