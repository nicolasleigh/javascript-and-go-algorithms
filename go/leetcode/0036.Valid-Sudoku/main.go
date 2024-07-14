package main

// 解法二 添加缓存，时间复杂度 O(n^2)
func isValidSudoku(board [][]byte) bool {
	rowBuf, colBuf, boxBuf := make([][]bool, 9), make([][]bool, 9), make([][]bool, 9)
	for i := 0; i < 9; i++ {
		rowBuf[i] = make([]bool, 9)
		colBuf[i] = make([]bool, 9)
		boxBuf[i] = make([]bool, 9)
	}
	// 遍历一次，添加缓存
	for r := 0; r < 9; r++ {
		for c := 0; c < 9; c++ {
			if board[r][c] != '.' {
				num := board[r][c] - '0' - byte(1)
				if rowBuf[r][num] || colBuf[c][num] || boxBuf[r/3*3+c/3][num] {
					return false
				}
				rowBuf[r][num] = true
				colBuf[c][num] = true
				boxBuf[r/3*3+c/3][num] = true // r,c 转换到box方格中
			}
		}
	}
	return true
}